#!/usr/bin/env node

/**
 * Script: split-archives.js
 * 
 * Takes:
 * - 2024-06-13_Marshall-s-Monday-Morning-ML---Archive-001-7af6a0d2b77f.html
 * - 2025-06-13_Marshall-s-Monday-Morning-ML---Archive-002-3f54812a7b37.html
 *
 * Breaks each sequential dated issue into an individual, standalone HTML file
 * in maj_backup_posts/ with filenames formatted as:
 *   YYYY-MM-DD_<Slugified-Title>.html
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BACKUP_DIR = path.resolve(__dirname, '../maj_backup_posts');

const ARCHIVE_FILES = [
  '2024-06-13_Marshall-s-Monday-Morning-ML---Archive-001-7af6a0d2b77f.html',
  '2025-06-13_Marshall-s-Monday-Morning-ML---Archive-002-3f54812a7b37.html',
];

const MONTH_MAP = {
  January: '01', February: '02', March: '03', April: '04',
  May: '05', June: '06', July: '07', August: '08',
  September: '09', October: '10', November: '11', December: '12',
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

function parseDate(dateStr) {
  // Matches "Month DD, YYYY" or "Month D, YYYY"
  const match = dateStr.match(/^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})/i);
  if (!match) return null;
  const month = MONTH_MAP[match[1]];
  const day = match[2].padStart(2, '0');
  const year = match[3];
  return `${year}-${month}-${day}`;
}

async function splitArchive(archiveFilename) {
  const filePath = path.join(BACKUP_DIR, archiveFilename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Archive file not found: ${filePath}`);
    return [];
  }

  console.log(`\nProcessing archive: ${archiveFilename}...`);
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  const sections = $('section[data-field="body"] > section.section--body');
  console.log(`  Total sections in body: ${sections.length}`);

  const splitPosts = [];

  sections.each((idx, sectionEl) => {
    const $sec = $(sectionEl);
    const leadingP = $sec.find('p.graf--leading');
    if (!leadingP.length) return;

    const rawDateText = leadingP.first().text().trim();
    const isoDate = parseDate(rawDateText);
    if (!isoDate) return;

    // Find the primary title (first <strong> element in the section)
    const strongEl = $sec.find('strong').first();
    let title = strongEl.length ? strongEl.text().trim() : '';

    if (!title || title.length < 3) {
      // Fallback: look for first paragraph after the date
      const nextP = leadingP.next('p');
      title = nextP.length ? nextP.text().trim().slice(0, 50) : `Monday Morning ML ${isoDate}`;
    }

    // Clean up title (remove trailing punctuation if any)
    title = title.replace(/[:\-–—]+$/, '').trim();

    const slugTitle = slugify(title);
    const outputFilename = `${isoDate}_${slugTitle}.html`;
    const outputPath = path.join(BACKUP_DIR, outputFilename);

    // Build standalone HTML
    const sectionHtml = $.html($sec);
    const standaloneHtml = `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>${title} · Marshall's Monday Morning ML</title>
</head>
<body>
  <article class="h-entry">
    <header>
      <h1 class="p-name">${title}</h1>
      <time class="dt-published" datetime="${isoDate}">${rawDateText}</time>
    </header>
    <section data-field="body" class="e-content">
      ${sectionHtml}
    </section>
    <footer>
      <p>By <a href="https://medium.com/@jung.marshall" class="p-author">Marshall Jung</a> on ${rawDateText}</p>
      <p>Publication: Marshall's Monday Morning ML</p>
    </footer>
  </article>
</body>
</html>`;

    fs.writeFileSync(outputPath, standaloneHtml, 'utf-8');
    splitPosts.push({
      date: isoDate,
      title,
      filename: outputFilename,
      path: outputPath,
    });
  });

  console.log(`  Split out ${splitPosts.length} individual dated posts from ${archiveFilename}`);
  return splitPosts;
}

async function run() {
  let totalSplit = 0;
  for (const archive of ARCHIVE_FILES) {
    const posts = await splitArchive(archive);
    totalSplit += posts.length;
  }
  console.log(`\nSuccessfully split ${totalSplit} individual dated posts into ${BACKUP_DIR}`);
}

run();
