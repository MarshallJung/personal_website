#!/usr/bin/env node

/**
 * Script: ingest-backup-posts.js
 *
 * Ingests all HTML posts from maj_backup_posts/:
 * 1. Scans all individual dated HTML files (skipping raw archive master files).
 * 2. Parses title, publication date, excerpt/subtitle.
 * 3. Extracts Medium images, downloads them with concurrency to public/images/blog/<slug>/
 *    (skips if already downloaded).
 * 4. Rewrites image URLs to local relative paths.
 * 5. Cleans and converts HTML into high-fidelity Markdown with Turndown:
 *    - Strips redundant header tags, duplicate titles, and dates.
 *    - Converts Medium section headers (<p><strong>Heading</strong></p>) into ### Heading.
 *    - Formats figures and captions.
 *    - Clean lists, blockquotes, and code formatting.
 * 6. Generates content/blog/<slug>.md without duplicate H1.
 * 7. Compiles content/blog/posts.json index.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const BACKUP_DIR = path.resolve(ROOT_DIR, 'maj_backup_posts');
const BLOG_CONTENT_DIR = path.resolve(ROOT_DIR, 'content/blog');
const BLOG_IMAGES_DIR = path.resolve(ROOT_DIR, 'public/images/blog');

fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true });
fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'untitled-issue';
}

function normalizeCompare(str) {
  return str
    .toLowerCase()
    .replace(/\u00a0/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function pMap(items, fn, concurrency = 12) {
  const results = [];
  const executing = [];
  for (const item of items) {
    const p = Promise.resolve().then(() => fn(item));
    results.push(p);
    if (concurrency <= items.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= concurrency) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(results);
}

async function downloadImage(imgSrc, imageId, destPath) {
  if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
    return true; // Already cached
  }

  let downloadUrl = imgSrc;
  if (imageId) {
    downloadUrl = `https://miro.medium.com/v2/resize:fit:1600/${imageId}`;
  } else if (imgSrc.includes('cdn-images-1.medium.com/max/')) {
    const id = imgSrc.split('/').pop();
    downloadUrl = `https://miro.medium.com/v2/resize:fit:1600/${id}`;
  }

  try {
    const res = await fetch(downloadUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)',
      },
    });

    if (!res.ok) {
      const fbRes = await fetch(imgSrc);
      if (!fbRes.ok) return false;
      const buf = Buffer.from(await fbRes.arrayBuffer());
      fs.writeFileSync(destPath, buf);
      return true;
    }

    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buf);
    return true;
  } catch (err) {
    return false;
  }
}

function createTurndownService() {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    hr: '---',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
    strongDelimiter: '**',
  });

  // Convert Medium figures and images
  turndown.addRule('mediumFigure', {
    filter: 'figure',
    replacement: function (content, node) {
      const img = node.querySelector('img');
      if (!img) return '';
      const src = img.getAttribute('data-local-src') || img.getAttribute('src') || '';
      const captionEl = node.querySelector('figcaption');
      const caption = captionEl ? captionEl.textContent.trim() : '';
      const alt = img.getAttribute('alt') || caption || 'Figure';

      let res = `\n\n![${alt}](${src})\n`;
      if (caption) {
        res += `\n*${caption}*\n\n`;
      }
      return res;
    },
  });

  // Convert standalone strong paragraphs to H3 headings
  turndown.addRule('standaloneStrongToHeading', {
    filter: function (node) {
      if (node.nodeName === 'P') {
        const strong = node.querySelector('strong');
        if (strong) {
          const text = node.textContent.trim();
          const strongText = strong.textContent.trim();
          if (text === strongText && text.length > 0 && text.length < 80) {
            return true;
          }
        }
      }
      return false;
    },
    replacement: function (content) {
      const clean = content.replace(/^\*\*|\*\*$/g, '').trim();
      return `\n\n### ${clean}\n\n`;
    },
  });

  // Fenced code blocks
  turndown.addRule('fencedPre', {
    filter: 'pre',
    replacement: function (content, node) {
      const code = node.textContent.trim();
      return `\n\n\`\`\`\n${code}\n\`\`\`\n\n`;
    },
  });

  // Clean blockquotes & pullquotes
  turndown.addRule('mediumQuotes', {
    filter: ['blockquote'],
    replacement: function (content) {
      const clean = content.trim().replace(/^>\s*/gm, '');
      return `\n\n> ${clean}\n\n`;
    },
  });

  return turndown;
}

function isJunkParagraph(text, title = '') {
  if (!text) return true;
  const t = text.trim();
  if (t.length < 35) return true;
  if (t.startsWith('http://') || t.startsWith('https://')) return true;
  if (t.includes('@') && t.includes('.')) return true;
  if (/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(t)) return true;
  if (t.includes('Wild West, Colorado')) return true;
  if (/^Archive[s]? available here/i.test(t) || t.includes('medium.com/@jung.marshall')) return true;
  if (/^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i.test(t)) return true;
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return true;
  if (title && (normalizeCompare(t) === normalizeCompare(title) || normalizeCompare(title).startsWith(normalizeCompare(t)))) return true;
  return false;
}

function htmlToMarkdown($, title) {
  // Remove boilerplate headers, footers, and dividers
  $('header').remove();
  $('footer').remove();
  $('.section-divider').remove();
  $('time').remove();

  // Remove leading date paragraph
  $('p.graf--leading').remove();

  // Remove leading title if it repeats the article title
  const normTitle = normalizeCompare(title);
  $('h1, h2, h3, h4, p').slice(0, 4).each((i, el) => {
    const text = normalizeCompare($(el).text());
    if (text === normTitle || (text.length > 8 && normTitle.startsWith(text))) {
      $(el).remove();
    }
  });

  // Remove contact and metadata boilerplate paragraphs at start of post
  $('p').slice(0, 10).each((i, el) => {
    const text = $(el).text().trim();
    if (
      text.includes('jung.marshall@gmail.com') ||
      text.includes('Wild West, Colorado') ||
      /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(text) ||
      text.includes('Archive​s available here') ||
      text.includes('Archives available here') ||
      /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i.test(text)
    ) {
      $(el).remove();
    }
  });

  const turndown = createTurndownService();
  const bodyHtml = $('section[data-field="body"]').html() || $('body').html() || '';
  let md = turndown.turndown(bodyHtml);

  // Clean excessive empty lines
  md = md.replace(/\n{3,}/g, '\n\n').trim();
  return md;
}

async function processFile(filename) {
  // Skip master archive files since they've been split
  if (filename.includes('Archive-001') || filename.includes('Archive-002')) {
    return null;
  }

  const filePath = path.join(BACKUP_DIR, filename);
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  // Extract date from filename prefix (YYYY-MM-DD)
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  let postDate = dateMatch ? dateMatch[1] : '';

  if (!postDate) {
    const timeEl = $('time.dt-published');
    if (timeEl.length && timeEl.attr('datetime')) {
      postDate = timeEl.attr('datetime').split('T')[0];
    } else {
      postDate = new Date().toISOString().split('T')[0];
    }
  }

  // Extract title
  let title = $('h1.p-name').first().text().trim();
  if (!title) title = $('title').text().replace(/ · Marshall's Monday Morning ML$/, '').replace(/ \| by .*? \| Medium$/, '').trim();
  if (!title) {
    const cleanBasename = filename.replace(/^\d{4}-\d{2}-\d{2}_/, '').replace(/-[a-f0-9]{8,12}\.html$/, '').replace(/\.html$/, '');
    title = cleanBasename.replace(/-/g, ' ');
  }

  // Extract subtitle / description
  let description = '';
  const subtitle = $('section[data-field="subtitle"]').text().trim();
  if (subtitle && !isJunkParagraph(subtitle, title)) {
    description = subtitle.slice(0, 200) + (subtitle.length > 200 ? '...' : '');
  } else {
    $('section[data-field="body"] p, section.e-content p, article p').each((_, el) => {
      const pText = $(el).text().trim();
      if (!description && !isJunkParagraph(pText, title)) {
        description = pText.slice(0, 200) + (pText.length > 200 ? '...' : '');
      }
    });
  }

  const slug = `${postDate}-${slugify(title)}`;
  const postImagesDir = path.join(BLOG_IMAGES_DIR, slug);
  fs.mkdirSync(postImagesDir, { recursive: true });

  // Find images to download and rewrite
  const images = [];
  $('img').each((idx, el) => {
    const src = $(el).attr('src');
    const imageId = $(el).attr('data-image-id');
    if (src && (src.includes('medium.com') || src.startsWith('http'))) {
      images.push({ index: idx + 1, src, imageId, element: $(el) });
    }
  });

  let coverImage = '';
  for (let i = 0; i < images.length; i++) {
    const { index, src, imageId, element } = images[i];
    const ext = src.includes('.png') ? '.png' : src.includes('.webp') ? '.webp' : '.jpg';
    const imgFilename = `image-${String(index).padStart(2, '0')}${ext}`;
    const destPath = path.join(postImagesDir, imgFilename);
    const localSrc = `/images/blog/${slug}/${imgFilename}`;

    const ok = await downloadImage(src, imageId, destPath);
    if (ok) {
      element.attr('data-local-src', localSrc);
      if (i === 0) coverImage = localSrc;
    }
  }

  // Convert to high-fidelity Markdown
  const markdownBody = htmlToMarkdown($, title);

  // Approximate reading time
  const wordCount = markdownBody.split(/\s+/).length;
  const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  // Determine tags
  const tags = [];
  if (filename.toLowerCase().includes('monday') || title.toLowerCase().includes('ml') || markdownBody.includes('Monday Morning')) {
    tags.push("Monday Morning ML");
  }
  if (markdownBody.includes('LLM') || markdownBody.includes('AI') || markdownBody.includes('Agent')) {
    tags.push("AI Strategy");
  }
  if (title.toLowerCase().includes('race car') || markdownBody.includes('suspension') || markdownBody.includes('Porsche')) {
    tags.push("Motorsport & Dynamics");
  }
  if (tags.length === 0) tags.push("Intelligence");

  // Write frontmatter + body (WITHOUT redundant `# ${title}` since React header renders the H1)
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `slug: ${JSON.stringify(slug)}`,
    `date: ${JSON.stringify(postDate)}`,
    `description: ${JSON.stringify(description)}`,
    `coverImage: ${JSON.stringify(coverImage)}`,
    `tags: ${JSON.stringify(tags)}`,
    `readTime: ${JSON.stringify(readTime)}`,
    '---',
    '',
    markdownBody,
  ].join('\n');

  const mdFilePath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);
  fs.writeFileSync(mdFilePath, frontmatter, 'utf-8');

  return {
    title,
    slug,
    date: postDate,
    description,
    coverImage,
    tags,
    readTime,
    file: `content/blog/${slug}.md`,
  };
}

async function run() {
  console.log('Scanning maj_backup_posts/ for dated HTML files...');
  const files = fs.readdirSync(BACKUP_DIR).filter((f) => f.endsWith('.html'));
  const validFiles = files.filter(
    (f) => !f.includes('Archive-001') && !f.includes('Archive-002')
  );
  console.log(`Processing ${validFiles.length} individual dated posts with Turndown engine...`);

  let count = 0;
  const posts = await pMap(
    validFiles,
    async (file) => {
      const result = await processFile(file);
      count++;
      if (count % 25 === 0 || count === validFiles.length) {
        console.log(`  Converted [${count}/${validFiles.length}] posts to clean markdown...`);
      }
      return result;
    },
    12
  );

  const seenSlugs = new Set();
  const cleanPosts = posts
    .filter(Boolean)
    .filter((p) => {
      if (seenSlugs.has(p.slug)) return false;
      seenSlugs.add(p.slug);
      return true;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const registryPath = path.join(BLOG_CONTENT_DIR, 'posts.json');
  fs.writeFileSync(registryPath, JSON.stringify(cleanPosts, null, 2), 'utf-8');

  console.log(`\nSuccessfully converted and ingested ${cleanPosts.length} posts into content/blog/!`);
  console.log(`Registry updated: ${path.relative(ROOT_DIR, registryPath)}`);
}

run();
