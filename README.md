# Personal Website & Online Resume

A modern, high-performance personal website and online resume combining AI systems expertise, self-hosted Medium blog writings with local asset management, and a chronological race car engineering build journal.

Built following the [Nick Losier Profile Architecture](https://nicklosier.com/profile-architecture/):
- **Vite + React + Tailwind CSS**: Multi-page architecture (MPA) where each page is an independent HTML document (`/`, `/blog/`, `/racecar/`).
- **Zero Server Hosting**: Hosted on GitHub Pages with free automated TLS and edge distribution.
- **Automated CI/CD**: GitHub Actions workflow (`.github/workflows/deploy.yml`) builds on push to `main` and deploys the static `dist/` directory.
- **Custom Domain Persistence**: `public/CNAME` ensures the custom domain is never dropped on redeployment.
- **Privacy & Unlisted Pages**: Gitignored `.private/` folder for private notes, and `<meta name="robots" content="noindex, nofollow">` for unlisted pages without leaking paths in `robots.txt`.

---

## 🛠 Features & Content Pipelines

### 1. Resume & AI Expertise Showcase
- Interactive resume component with skill categorization (AI/ML, Distributed Systems, Software, Motorsport).
- Work history timeline with key achievements and impact metrics.
- Downloadable PDF resume link served statically from `public/resume.pdf` at `/resume.pdf`.
- Configured in [`src/data/profile.js`](./src/data/profile.js).

### 2. Blog Post & Medium Image Ingestion Pipeline
Solves the challenge of hosting text from Google Drive / Medium while self-hosting images:
- **CLI Ingestion Tool**: [`scripts/ingest-medium.js`](./scripts/ingest-medium.js)
  ```bash
  # Ingest from user's Medium RSS feed
  npm run ingest:medium -- --user your_medium_username

  # Ingest a specific Medium article
  npm run ingest:medium -- --url "https://medium.com/@username/article-title"
  ```
- **What it does**:
  1. Parses article prose into clean Markdown with YAML frontmatter.
  2. Scrapes all images from Medium's CDN, downloads the highest available resolution into `public/images/blog/<slug>/`, and rewrites image links to local relative paths.
  3. Saves markdown to `content/blog/<slug>.md` and updates `content/blog/posts.json`.
  4. Fully self-contained — zero hotlinking or external dependencies.

### 3. Google Photos Race Car Build Journal
Creates an interactive, chronological build journal from your Google Photos:
- **CLI Sync Tool**: [`scripts/sync-racecar.js`](./scripts/sync-racecar.js)
  ```bash
  # 1. Download your Google Photos album (.zip) and extract into staging/racecar/
  # 2. Run the sync command:
  npm run sync:racecar
  ```
- **What it does**:
  1. Reads all images in `staging/racecar/`.
  2. Uses `exifr` to extract camera metadata and exact capture timestamps (`DateTimeOriginal`).
  3. Copies photos to `public/images/racecar/<YYYY-MM>/`.
  4. Generates/updates chronological entries in `content/racecar/journal.json`.
  5. Intelligently preserves any custom notes, subsystem tags (`Aero`, `Chassis`, `Suspension`, `Telemetry`), or specs you add to `journal.json`.
- **UI Features**:
  - Interactive subsystem filtering.
  - Lightbox modal with full image view, notes, and specs.
  - Telemetry and lap time display configured in [`src/data/racecarData.js`](./src/data/racecarData.js).

---

## 🚀 Development & Build Commands

```bash
# Start local development server (with hot module reload)
npm run dev

# Build production static bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Connecting Your Domain (DNS & GitHub Pages)

### 1. Configure Domain in `public/CNAME`
[`public/CNAME`](./public/CNAME) is configured with your domain:
```
codeandsteel.net
```

### 2. Set Up DNS Records at GoDaddy
Point your apex domain `codeandsteel.net` to GitHub Pages:

| Type | Host / Name | Value / Points To | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | 1/2 hour (or default) |
| **A** | `@` | `185.199.109.153` | 1/2 hour |
| **A** | `@` | `185.199.110.153` | 1/2 hour |
| **A** | `@` | `185.199.111.153` | 1/2 hour |
| **CNAME** | `www` | `MarshallJung.github.io` | 1/2 hour |

*Note*: If GoDaddy has a default "parked page" A record on `@` (e.g. `34.102.136.180`), delete it so it does not conflict with GitHub's IPs. Do not use GoDaddy domain forwarding.

### 3. Enable GitHub Pages in Your Private Repository
1. In your GitHub repository: go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push to `main` branch: GitHub Actions will build and deploy automatically.
4. Once DNS resolves, check **Enforce HTTPS**.
