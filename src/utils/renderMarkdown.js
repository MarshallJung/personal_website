import { marked } from 'marked';
import katex from 'katex';

/**
 * Renders blog Markdown to HTML with optional KaTeX math and Mermaid diagram placeholders.
 * Code blocks and inline code are protected before math parsing so literal `$` characters
 * in code snippets are never treated as math delimiters.
 */
export function renderMarkdownToHtml(rawMarkdown, { enableMath = false } = {}) {
  const codePlaceholders = [];
  const mermaidPlaceholders = [];
  const mathPlaceholders = [];

  let text = rawMarkdown.replace(/\r\n/g, '\n');

  // 1. Extract fenced code blocks (mermaid -> deferred SVG container, others -> raw code)
  text = text.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    if (lang.toLowerCase() === 'mermaid') {
      const idx = mermaidPlaceholders.length;
      mermaidPlaceholders.push(
        `<div class="mermaid-block" data-mermaid="${encodeURIComponent(code.trim())}"></div>`
      );
      return `\n\n@@MERMAID_BLOCK_${idx}@@\n\n`;
    }
    const idx = codePlaceholders.length;
    codePlaceholders.push(match);
    return `@@CODE_TOKEN_${idx}@@`;
  });

  // 2. Protect inline code spans
  text = text.replace(/`([^`\n]+)`/g, (match) => {
    const idx = codePlaceholders.length;
    codePlaceholders.push(match);
    return `@@CODE_TOKEN_${idx}@@`;
  });

  // 3. Render KaTeX math only when opted in by post metadata (`math: true`)
  if (enableMath) {
    // Display math: $$...$$
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, expr) => {
      const idx = mathPlaceholders.length;
      const rendered = katex.renderToString(expr.trim(), {
        displayMode: true,
        throwOnError: false,
        strict: 'ignore',
      });
      mathPlaceholders.push({ html: rendered, block: true });
      return `\n\n@@MATH_BLOCK_${idx}@@\n\n`;
    });

    // Inline math: $...$ (ignoring escaped \$ and leading/trailing spaces)
    text = text.replace(/(?<!\\)\$(?!\s)((?:\\.|[^$\\])+?)(?<!\s)\$/g, (_, expr) => {
      const idx = mathPlaceholders.length;
      const rendered = katex.renderToString(expr.trim(), {
        displayMode: false,
        throwOnError: false,
        strict: 'ignore',
      });
      mathPlaceholders.push({ html: rendered, block: false });
      return `@@MATH_INLINE_${idx}@@`;
    });
  }

  // 4. Restore protected code blocks & inline code before Markdown parsing
  text = text.replace(/@@CODE_TOKEN_(\d+)@@/g, (_, idx) => codePlaceholders[Number(idx)]);

  // 5. Parse Markdown
  let html = marked.parse(text);

  // 6. Restore Mermaid blocks (unwrap <p> wrapper added by marked)
  html = html.replace(/<p>\s*@@MERMAID_BLOCK_(\d+)@@\s*<\/p>/g, (_, idx) => mermaidPlaceholders[Number(idx)]);
  html = html.replace(/@@MERMAID_BLOCK_(\d+)@@/g, (_, idx) => mermaidPlaceholders[Number(idx)]);

  // 7. Restore KaTeX display and inline math
  html = html.replace(/<p>\s*@@MATH_BLOCK_(\d+)@@\s*<\/p>/g, (_, idx) => mathPlaceholders[Number(idx)].html);
  html = html.replace(/@@MATH_BLOCK_(\d+)@@/g, (_, idx) => mathPlaceholders[Number(idx)].html);
  html = html.replace(/@@MATH_INLINE_(\d+)@@/g, (_, idx) => mathPlaceholders[Number(idx)].html);

  return html;
}
