#!/usr/bin/env node

/**
 * Script: build-search-index.js
 *
 * Compiles a full-text MiniSearch index for all blog posts:
 * 1. Reads content/blog/posts.json.
 * 2. Reads each markdown file from content/blog/*.md.
 * 3. Strips markdown syntax, images, links, and code wrappers to produce clean text.
 * 4. Indexes title, tags, description, and stripped body content.
 * 5. Serializes the index to public/search-index.json for instant static client-side search.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import MiniSearch from 'minisearch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const POSTS_JSON = path.join(ROOT_DIR, 'content/blog/posts.json');
const BLOG_DIR = path.join(ROOT_DIR, 'content/blog');
const OUTPUT_FILE = path.join(ROOT_DIR, 'public/search-index.json');

export function buildSearchIndex() {
  if (!fs.existsSync(POSTS_JSON)) {
    console.error(`Error: posts.json not found at ${POSTS_JSON}`);
    process.exit(1);
  }

  const posts = JSON.parse(fs.readFileSync(POSTS_JSON, 'utf-8'));
  console.log(`Building search index for ${posts.length} blog posts...`);

  const miniSearch = new MiniSearch({
    fields: ['title', 'tags', 'description', 'content'],
    storeFields: ['title', 'slug', 'date', 'readTime', 'tags'],
    searchOptions: {
      boost: { title: 4, tags: 2.5, description: 1.5, content: 1 },
      prefix: true,
      fuzzy: 0.2,
      combineWith: 'AND',
    },
  });

  const documents = [];
  const seenIds = new Set();

  for (const post of posts) {
    if (!post.slug || seenIds.has(post.slug)) continue;
    seenIds.add(post.slug);

    let content = '';
    const mdPath = path.join(BLOG_DIR, `${post.slug}.md`);
    if (fs.existsSync(mdPath)) {
      const raw = fs.readFileSync(mdPath, 'utf-8');
      content = raw
        .replace(/^---[\s\S]*?---\n/, '') // Strip frontmatter
        .replace(/!\[.*?\]\(.*?\)/g, '') // Strip images
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Extract link text
        .replace(/[`#*_~>-]/g, ' ') // Strip markdown formatting characters
        .replace(/\s+/g, ' ') // Normalize spaces
        .trim();
    }

    documents.push({
      id: post.slug,
      slug: post.slug,
      title: post.title || '',
      date: post.date || '',
      readTime: post.readTime || '',
      tags: Array.isArray(post.tags) ? post.tags.join(' ') : (post.tags || ''),
      description: post.description || '',
      content,
    });
  }

  miniSearch.addAll(documents);

  const serialized = JSON.stringify(miniSearch);
  fs.writeFileSync(OUTPUT_FILE, serialized, 'utf-8');

  const sizeKb = (Buffer.byteLength(serialized, 'utf-8') / 1024).toFixed(1);
  console.log(`✓ Search index generated: ${path.relative(ROOT_DIR, OUTPUT_FILE)} (${sizeKb} KB, ${documents.length} documents)`);
}

// Run directly if invoked from CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  buildSearchIndex();
}
