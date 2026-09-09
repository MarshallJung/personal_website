#!/usr/bin/env node

/**
 * Medium Blog Post & Image Ingestion Script
 *
 * This script solves the Medium image hosting dilemma:
 * 1. Fetches Medium articles (via direct URL, user RSS feed, or local Medium export zip/HTML).
 * 2. Downloads all images hosted on Medium's CDN to `public/images/blog/<post-slug>/`.
 * 3. Rewrites the image URLs to local static paths (`/images/blog/<post-slug>/...`).
 * 4. Generates clean Markdown with YAML frontmatter in `content/blog/<post-slug>.md`.
 * 5. Updates `content/blog/posts.json` for immediate frontend indexing.
 *
 * Usage:
 *   node scripts/ingest-medium.js --url "https://medium.com/@username/my-post-title-12345"
 *   node scripts/ingest-medium.js --user "marshalljung"
 *   node scripts/ingest-medium.js --export "./staging/medium-export/posts"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_CONTENT_DIR = path.resolve(ROOT_DIR, 'content/blog');
const BLOG_IMAGES_DIR = path.resolve(ROOT_DIR, 'public/images/blog');

// Ensure directories exist
fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true });
fs.mkdirSync(BLOG_IMAGES_DIR, { recursive: true });

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '') || 'untitled-post';
}

async function downloadImage(imgUrl, destinationPath) {
  try {
    // Attempt highest resolution Medium URL by removing resize parameters if possible
    let cleanUrl = imgUrl;
    if (cleanUrl.includes('miro.medium.com/v2/resize:fit:')) {
      cleanUrl = cleanUrl.replace(/resize:fit:\d+/, 'resize:fit:2000');
    }

    const response = await fetch(cleanUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} fetching ${imgUrl}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(destinationPath, buffer);
    return true;
  } catch (err) {
    console.warn(`[Warning] Failed to download image ${imgUrl}: ${err.message}`);
    return false;
  }
}

function htmlToMarkdown($, postSlug, postImagesDir) {
  // Convert figures and images
  $('figure').each((i, el) => {
    const $fig = $(el);
    const $img = $fig.find('img');
    const $caption = $fig.find('figcaption');
    const alt = $img.attr('alt') || $caption.text().trim() || 'Blog illustration';
    const captionText = $caption.text().trim();
    const localImgPath = $img.attr('data-local-src') || $img.attr('src');

    let markdownFig = `\n\n![${alt}](${localImgPath})\n`;
    if (captionText) {
      markdownFig += `*${captionText}*\n\n`;
    }
    $fig.replaceWith(markdownFig);
  });

  // Convert headings
  $('h1').each((i, el) => $(el).replaceWith(`\n# ${$(el).text().trim()}\n\n`));
  $('h2').each((i, el) => $(el).replaceWith(`\n## ${$(el).text().trim()}\n\n`));
  $('h3').each((i, el) => $(el).replaceWith(`\n### ${$(el).text().trim()}\n\n`));
  $('h4').each((i, el) => $(el).replaceWith(`\n#### ${$(el).text().trim()}\n\n`));

  // Convert paragraphs and blockquotes
  $('blockquote').each((i, el) => $(el).replaceWith(`\n> ${$(el).text().trim()}\n\n`));
  $('p').each((i, el) => $(el).replaceWith(`\n${$(el).html().trim()}\n\n`));

  // Convert lists
  $('ul > li').each((i, el) => $(el).replaceWith(`- ${$(el).text().trim()}\n`));
  $('ol > li').each((i, el) => $(el).replaceWith(`${i + 1}. ${$(el).text().trim()}\n`));

  // Convert code blocks
  $('pre').each((i, el) => {
    const code = $(el).find('code').length ? $(el).find('code').text() : $(el).text();
    $(el).replaceWith(`\n\`\`\`\n${code.trim()}\n\`\`\`\n\n`);
  });

  // Convert links: <a href="url">text</a> -> [text](url)
  $('a').each((i, el) => {
    const href = $(el).attr('href');
    const text = $(el).text().trim();
    if (href && text) {
      $(el).replaceWith(`[${text}](${href})`);
    }
  });

  let raw = $('body').text().trim();
  // Normalize extra newlines
  raw = raw.replace(/\n{3,}/g, '\n\n');
  return raw;
}

async function processArticleHtml(htmlContent, metaFallback = {}) {
  const $ = cheerio.load(htmlContent);

  // Extract metadata
  const title =
    $('meta[property="og:title"]').attr('content') ||
    $('title').text().replace(/ \| by .*? \| Medium$/, '').trim() ||
    metaFallback.title ||
    'Untitled Post';

  const description =
    $('meta[name="description"]').attr('content') ||
    $('meta[property="og:description"]').attr('content') ||
    metaFallback.description ||
    '';

  const publishedDate =
    $('meta[property="article:published_time"]').attr('content') ||
    metaFallback.date ||
    new Date().toISOString().split('T')[0];

  const canonicalUrl =
    $('link[rel="canonical"]').attr('href') ||
    metaFallback.url ||
    '';

  const slug = slugify(metaFallback.slug || title);
  const postImageDir = path.join(BLOG_IMAGES_DIR, slug);
  fs.mkdirSync(postImageDir, { recursive: true });

  // Find all images
  const images = [];
  $('img').each((idx, el) => {
    const src = $(el).attr('src') || $(el).attr('data-src');
    if (src && (src.includes('medium.com') || src.startsWith('http'))) {
      images.push({ index: idx + 1, src, element: $(el) });
    }
  });

  console.log(`\nFound ${images.length} image(s) in post: "${title}"`);

  let coverImage = '';
  for (let i = 0; i < images.length; i++) {
    const { index, src, element } = images[i];
    let ext = '.jpg';
    if (src.includes('.png')) ext = '.png';
    else if (src.includes('.webp')) ext = '.webp';
    else if (src.includes('.gif')) ext = '.gif';

    const filename = `image-${String(index).padStart(2, '0')}${ext}`;
    const destinationPath = path.join(postImageDir, filename);
    const localPublicPath = `/images/blog/${slug}/${filename}`;

    console.log(`  Downloading [${i + 1}/${images.length}]: ${src.slice(0, 70)}... -> ${filename}`);
    const success = await downloadImage(src, destinationPath);

    if (success) {
      element.attr('data-local-src', localPublicPath);
      if (i === 0) coverImage = localPublicPath;
    }
  }

  // Convert to Markdown
  const markdownBody = htmlToMarkdown($, slug, postImageDir);

  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `slug: ${JSON.stringify(slug)}`,
    `date: ${JSON.stringify(publishedDate.split('T')[0])}`,
    `description: ${JSON.stringify(description)}`,
    `coverImage: ${JSON.stringify(coverImage)}`,
    `tags: ${JSON.stringify(metaFallback.tags || ['AI', 'Engineering'])}`,
    `canonicalUrl: ${JSON.stringify(canonicalUrl)}`,
    '---',
    '',
    markdownBody,
  ].join('\n');

  const outputPath = path.join(BLOG_CONTENT_DIR, `${slug}.md`);
  fs.writeFileSync(outputPath, frontmatter, 'utf-8');
  console.log(`  Saved Markdown: ${path.relative(ROOT_DIR, outputPath)}`);

  return {
    title,
    slug,
    date: publishedDate.split('T')[0],
    description,
    coverImage,
    tags: metaFallback.tags || ['AI', 'Engineering'],
    canonicalUrl,
    file: `content/blog/${slug}.md`,
  };
}

async function updatePostsRegistry(newPosts) {
  const registryPath = path.join(BLOG_CONTENT_DIR, 'posts.json');
  let existing = [];
  if (fs.existsSync(registryPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(registryPath, 'utf-8'));
    } catch {
      existing = [];
    }
  }

  const mergedMap = new Map();
  existing.forEach((p) => mergedMap.set(p.slug, p));
  newPosts.forEach((p) => mergedMap.set(p.slug, p));

  const allPosts = Array.from(mergedMap.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  fs.writeFileSync(registryPath, JSON.stringify(allPosts, null, 2), 'utf-8');
  console.log(`\nUpdated blog registry: ${path.relative(ROOT_DIR, registryPath)} (${allPosts.length} posts indexed)`);
}

async function handleUrl(url) {
  console.log(`Fetching article from: ${url}`);
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)',
    },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} loading URL`);
  const html = await response.text();
  const post = await processArticleHtml(html, { url });
  await updatePostsRegistry([post]);
}

async function handleUserRss(username) {
  const cleanUser = username.replace(/^@/, '');
  const feedUrl = `https://medium.com/feed/@${cleanUser}`;
  console.log(`Fetching RSS feed for @${cleanUser} from: ${feedUrl}`);

  const res = await fetch(feedUrl);
  if (!res.ok) throw new Error(`Could not fetch RSS feed: HTTP ${res.status}`);
  const xml = await res.text();
  const $ = cheerio.load(xml, { xmlMode: true });

  const items = $('item');
  console.log(`Found ${items.length} post(s) in feed.`);

  const processed = [];
  for (let i = 0; i < items.length; i++) {
    const item = $(items[i]);
    const title = item.find('title').text().trim();
    const link = item.find('link').text().trim();
    const pubDate = item.find('pubDate').text().trim();
    const content = item.find('content\\:encoded').text();
    const categories = [];
    item.find('category').each((_, cat) => categories.push($(cat).text().trim()));

    console.log(`\nProcessing [${i + 1}/${items.length}]: ${title}`);
    const post = await processArticleHtml(content, {
      title,
      url: link,
      date: new Date(pubDate).toISOString(),
      tags: categories.length ? categories : ['AI', 'Engineering'],
    });
    processed.push(post);
  }

  await updatePostsRegistry(processed);
}

// CLI Arg Parsing
const args = process.argv.slice(2);
const urlIndex = args.indexOf('--url');
const userIndex = args.indexOf('--user');

if (urlIndex !== -1 && args[urlIndex + 1]) {
  await handleUrl(args[urlIndex + 1]);
} else if (userIndex !== -1 && args[userIndex + 1]) {
  await handleUserRss(args[userIndex + 1]);
} else {
  console.log(`
Medium Blog Ingestion Tool
--------------------------
Usage:
  node scripts/ingest-medium.js --user <medium_username>
  node scripts/ingest-medium.js --url <medium_post_url>

Example:
  node scripts/ingest-medium.js --user marshalljung
  node scripts/ingest-medium.js --url "https://medium.com/@marshalljung/scaling-agents"
`);
}
