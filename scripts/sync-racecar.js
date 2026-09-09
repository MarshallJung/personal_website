#!/usr/bin/env node

/**
 * Race Car Engineering Build Journal & Photo Sync Tool
 *
 * This script addresses the Google Photos integration:
 * 1. Reads photos from a staging folder (synced from Google Photos / Google Drive / phone)
 *    or shared album link.
 * 2. Reads EXIF metadata (exact date/time taken, camera settings, dimensions).
 * 3. Copies and organizes images into `public/images/racecar/<YYYY-MM>/`.
 * 4. Compiles a chronological build journal at `content/racecar/journal.json`.
 * 5. Intelligently merges entries so custom notes, vehicle specs, and subsystem tags
 *    (Powertrain, Chassis, Aero, Suspension, Telemetry) are never overwritten!
 *
 * Usage:
 *   node scripts/sync-racecar.js --dir ./staging/racecar
 *   node scripts/sync-racecar.js --album "https://photos.app.goo.gl/xxxx"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import exifr from 'exifr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const RACECAR_CONTENT_DIR = path.resolve(ROOT_DIR, 'content/racecar');
const RACECAR_IMAGES_DIR = path.resolve(ROOT_DIR, 'public/images/racecar');
const JOURNAL_FILE = path.join(RACECAR_CONTENT_DIR, 'journal.json');

fs.mkdirSync(RACECAR_CONTENT_DIR, { recursive: true });
fs.mkdirSync(RACECAR_IMAGES_DIR, { recursive: true });

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-') || 'entry';
}

function loadExistingJournal() {
  if (fs.existsSync(JOURNAL_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(JOURNAL_FILE, 'utf-8'));
    } catch (e) {
      console.warn('Could not parse existing journal.json, creating new.');
    }
  }
  return [];
}

async function processDirectory(stagingDir) {
  console.log(`\nScanning staging folder: ${stagingDir}`);
  if (!fs.existsSync(stagingDir)) {
    console.error(`Directory not found: ${stagingDir}`);
    return;
  }

  const existingEntries = loadExistingJournal();
  const entryMap = new Map();
  existingEntries.forEach((e) => entryMap.set(e.id, e));

  const files = fs.readdirSync(stagingDir).filter((file) => {
    return /\.(jpe?g|png|webp|heic)$/i.test(file);
  });

  if (files.length === 0) {
    console.log('No image files found in staging folder.');
    console.log('Tip: Drop photos from your Google Photos race car album into ./staging/racecar');
    return;
  }

  console.log(`Found ${files.length} photos. Extracting EXIF and ordering chronologically...`);

  const processedPhotos = [];

  for (const file of files) {
    const filePath = path.join(stagingDir, file);
    let exifData = null;
    try {
      exifData = await exifr.parse(filePath, [
        'DateTimeOriginal',
        'CreateDate',
        'ExifImageWidth',
        'ExifImageHeight',
        'Make',
        'Model',
      ]);
    } catch (err) {
      // Exif reading error, fallback to file modified time
    }

    const fileStat = fs.statSync(filePath);
    const dateTaken = exifData?.DateTimeOriginal || exifData?.CreateDate || fileStat.mtime;
    const dateObj = new Date(dateTaken);
    const yearMonth = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
    const isoDate = dateObj.toISOString().split('T')[0];

    const targetSubdir = path.join(RACECAR_IMAGES_DIR, yearMonth);
    fs.mkdirSync(targetSubdir, { recursive: true });

    const ext = path.extname(file).toLowerCase();
    const cleanBasename = path.basename(file, ext);
    const targetFilename = `${cleanBasename}${ext}`;
    const targetPath = path.join(targetSubdir, targetFilename);

    // Copy image if not already there
    if (!fs.existsSync(targetPath)) {
      fs.copyFileSync(filePath, targetPath);
      console.log(`  Copied: ${file} -> /images/racecar/${yearMonth}/${targetFilename}`);
    }

    const publicUrl = `/images/racecar/${yearMonth}/${targetFilename}`;
    processedPhotos.push({
      file,
      publicUrl,
      date: isoDate,
      timestamp: dateObj.getTime(),
      camera: exifData?.Model || '',
    });
  }

  // Sort photos chronologically
  processedPhotos.sort((a, b) => a.timestamp - b.timestamp);

  // Group photos by date into journal entries
  const groups = new Map();
  for (const photo of processedPhotos) {
    if (!groups.has(photo.date)) {
      groups.set(photo.date, []);
    }
    groups.get(photo.date).push(photo);
  }

  for (const [date, photos] of groups.entries()) {
    const entryId = `build-${date}`;
    const existing = entryMap.get(entryId);

    if (existing) {
      // Merge images without overwriting user customizations
      const existingImages = new Set(existing.images);
      photos.forEach((p) => existingImages.add(p.publicUrl));
      existing.images = Array.from(existingImages);
      entryMap.set(entryId, existing);
    } else {
      entryMap.set(entryId, {
        id: entryId,
        date: date,
        title: `Build Milestone - ${date}`,
        subsystem: 'Chassis & Engineering',
        summary: 'Progress on vehicle engineering, fabrication, and track setup.',
        specs: {},
        images: photos.map((p) => p.publicUrl),
        tags: ['Fabrication', 'Build Log'],
        notes: 'Add your custom build notes, torque specs, or track observations here.',
      });
    }
  }

  const sortedJournal = Array.from(entryMap.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  fs.writeFileSync(JOURNAL_FILE, JSON.stringify(sortedJournal, null, 2), 'utf-8');
  console.log(`\nSuccessfully updated race car build journal!`);
  console.log(`Journal: ${path.relative(ROOT_DIR, JOURNAL_FILE)} (${sortedJournal.length} entries)`);
}

async function handleAlbumLink(albumUrl) {
  console.log(`\nProcessing Google Photos Shared Album: ${albumUrl}`);
  console.log(`Note: Google Photos restricts direct automated batch downloads from private/session URLs.`);
  console.log(`Recommended best practice:`);
  console.log(`1. In your Google Photos album, click the 3 dots (...) -> 'Download all' (.zip).`);
  console.log(`2. Unzip into ./staging/racecar/`);
  console.log(`3. Run: npm run sync:racecar`);
  console.log(`\nThis extracts full-resolution EXIF dates, cameras, and auto-builds your chronological journal!`);
}

const args = process.argv.slice(2);
const dirIdx = args.indexOf('--dir');
const albumIdx = args.indexOf('--album');

if (dirIdx !== -1 && args[dirIdx + 1]) {
  await processDirectory(path.resolve(process.cwd(), args[dirIdx + 1]));
} else if (albumIdx !== -1 && args[albumIdx + 1]) {
  await handleAlbumLink(args[albumIdx + 1]);
} else {
  // Default to ./staging/racecar
  const defaultDir = path.resolve(ROOT_DIR, 'staging/racecar');
  if (fs.existsSync(defaultDir)) {
    await processDirectory(defaultDir);
  } else {
    console.log(`
Race Car Build Journal Sync Tool
--------------------------------
Usage:
  node scripts/sync-racecar.js --dir ./staging/racecar
  node scripts/sync-racecar.js --album <shared_album_url>

Tip: Drop photos into ./staging/racecar and run 'npm run sync:racecar'
to automatically extract EXIF capture dates, organize photos, and generate your build timeline!
`);
  }
}
