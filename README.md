# Revision Engine

A premium revision platform for CBSE Class 10 students. Access curated notes, summaries, and study materials — organized by subject and chapter, completely free.

## Features

- **Subject-wise organization** — Physics, Chemistry, Biology, Mathematics, and Social Science with chapter-level navigation
- **Premium dark UI** — Clean, minimal interface inspired by modern SaaS products
- **Fully responsive** — Optimized for desktop, tablet, and mobile
- **Fast and accessible** — Lazy-loaded routes, semantic HTML, keyboard navigation, ARIA labels
- **Scalable architecture** — Built to expand to additional classes and boards

## Tech Stack

- **React 18** with TypeScript (strict mode)
- **Vite 6** for fast builds and HMR
- **Tailwind CSS 3** for utility-first styling
- **Framer Motion** for animations
- **React Router 6** for client-side routing
- **Lucide React** for icons

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, RootLayout
│   ├── shared/        # SubjectIcon, ScrollToTop, AnimatedSection
│   └── ui/            # Button, Card, Badge, Input, Skeleton, etc.
├── constants/         # Navigation config, site metadata
├── data/              # Subject/chapter data, landing page content
├── hooks/             # useSubject, useScrollProgress
├── lib/               # Utility functions
├── pages/             # Route pages (Home, Subjects, About, etc.)
├── styles/            # Global CSS
└── types/             # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

## Environment Variables

No environment variables are required for the base application. If you add integrations later, create a `.env` file in the project root.

## License

MIT
