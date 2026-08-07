# Revio

A static resource hub for CBSE Class 10 revision materials across Physics, Chemistry, Mathematics, Biology, and Social Science.

Revio generates exam-accurate revision packs — Quick Revision Slides, Mindmaps, Cheatsheets, Worksheets, and Solution Keys — following strict subject-specific rules and NCERT terminology, and serves them as static downloads.

No backend. No database. No signup. Just fast, clean access to revision materials.

## Tech stack

- **React 18** with **Vite 5** as the bundler
- **Tailwind CSS 3** (custom design system, no component library)
- **React Router v6** for client-side routing
- **Lucide React** for icons
- **Google Fonts** — Plus Jakarta Sans (display), Inter (body), JetBrains Mono (monospace)

## Getting started

```bash
cd site
npm install
npm run dev
```

Open <http://localhost:5173>.

Build for production:

```bash
npm run build     # outputs to site/dist
npm run preview   # serve the build locally
```

## Project structure

```
site/
├── public/
│   ├── favicon.svg
│   ├── 404.html                 # GH Pages SPA redirect trampoline
│   └── assets/                  # Static downloadable files, one folder per subject
│       ├── physics/
│       ├── chemistry/
│       ├── mathematics/
│       ├── biology/
│       └── social-science/
├── src/
│   ├── components/              # Header, Footer, SubjectCard, ChapterCard, FileCard, ...
│   ├── pages/                   # Home, Subject, Chapter, NotFound
│   ├── data/
│   │   └── content.json         # Single source of truth for all subjects/chapters/files
│   ├── utils/                   # content.js, format.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json                  # SPA rewrite rule
└── package.json
```

## Adding new chapter materials

Adding content is a **3-step process** with zero code changes.

1. **Drop the files** into `public/assets/{subjectSlug}/` using the naming convention:
   ```
   10 - Light Reflection and Refraction (Quick Revision Slides).pptx
   10 - Light Reflection and Refraction (Worksheet).docx
   ```
2. **Edit `src/data/content.json`** — either add a new chapter entry or flip an existing `"coming-soon"` chapter to `"available"` and populate its `files` array:
   ```json
   {
     "id": "ph-ch10-light",
     "number": 10,
     "name": "Light — Reflection and Refraction",
     "slug": "light-reflection-and-refraction",
     "status": "available",
     "files": [
       {
         "type": "Quick Revision Slides",
         "format": "pptx",
         "filename": "10 - Light Reflection and Refraction (Quick Revision Slides).pptx",
         "size": "4.2 MB"
       }
     ]
   }
   ```
3. **Commit and push.** The GitHub Actions workflow rebuilds and redeploys automatically.

### Field reference

| Field         | Notes                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------- |
| `id`          | Stable unique identifier for the chapter. Prefix with subject code (e.g. `ph-ch10-light`).        |
| `number`      | Chapter number as it appears in NCERT.                                                            |
| `name`        | Full chapter title.                                                                               |
| `slug`        | URL-safe kebab-case, used in the chapter page URL.                                                |
| `status`      | `"available"` (has files) or `"coming-soon"` (renders muted, non-clickable).                      |
| `files[].type` | One of: `Quick Revision Slides`, `Mindmap`, `Cheatsheet`, `Worksheet`, `Solutions Key`.          |
| `files[].format` | `pptx`, `docx`, or `zip`.                                                                       |
| `files[].filename` | Exact filename inside `public/assets/{subjectSlug}/`.                                          |
| `files[].size` | Human-readable size string, e.g. `"4.2 MB"` or `"320 KB"`.                                       |

## Deployment

### Option A — Vercel (recommended)

1. Import the repo into Vercel.
2. Set the **Root Directory** to `site/`.
3. Framework: **Vite**. Build command `npm run build`, output `dist`.
4. `vercel.json` already handles SPA rewrites — no extra config needed.

### Option B — GitHub Pages

The included `.github/workflows/deploy.yml` builds `site/` on every push to `main` and publishes `site/dist` to the `gh-pages` environment.

For a project page (URL like `https://<user>.github.io/revio/`), set `base: '/revio/'` in `vite.config.js` before building. `public/404.html` handles deep-link refresh routing.

## Design system

Colors, spacing, typography and component patterns are expressed in `tailwind.config.js` + `src/index.css`. Key tokens:

- **Palette:** off-white background (`#FAFBFC`), navy hero (`#0F172A`), slate text (`#1E293B` / `#64748B`), accent blue (`#3B82F6`), with per-subject accents (violet, red, blue, green, amber).
- **Type scale:** clamp-based hero up to 4rem, `2rem` page titles, `1.125rem` card titles, `1rem` body.
- **Cards:** 12px radius, 1px slate-200 border, subtle shadow, lift + shadow on hover (respecting `prefers-reduced-motion`).
- **Grid:** 3 columns on desktop, 2 on tablet, single column on mobile.

## Content update workflow at a glance

```
generate materials → drop files in public/assets/{subject}/ → update content.json → git push → deployed
```

## Credits

Built by **[Shubhranshu Sahu](https://www.linkedin.com/in/shubhranshu-b07162409)**.

Licensed under the [MIT License](./LICENSE).
