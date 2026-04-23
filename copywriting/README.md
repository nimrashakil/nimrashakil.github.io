# /copywriting/ Subpage

Standalone subpage at `https://nimrashakil.github.io/copywriting/` hosting two long-form copy samples and four live landing pages.

## Structure

```
copywriting/
├── index.html       # Self-contained page with inline styles, no external deps
├── README.md        # This file
├── pdfs/            # 2 PDFs
│   ├── delenta-email-sequences.pdf
│   └── classhare-sales-landing-page.pdf
└── assets/          # 2 JPGs
    ├── chatpandas-homepage.jpg
    └── chatpandas-sales-landing.jpg
```

## Contents

### Copy Samples (2)

- **Delenta Email Sequences** (8 pages) — 3-email registration funnel plus 14-day post-webinar conversion roadmap
- **ClasShare Sales Landing Page** (5 pages) — Long-form founder-letter sales page with tiered pricing

### Landing Pages (4)

- **ChatPandas Homepage** — Full-page JPG screenshot of the live B2B SaaS customer support site
- **ChatPandas Sales Landing Page** — Full-page JPG screenshot of the B2B revenue engine sales page
- **Minimal Homepage** — Links directly to the Wayback Machine archive
- **LiveChat Ltd Homepage** — Links directly to the Wayback Machine archive

## Design language

- Typography: Georgia (body) + Helvetica Neue (headers, badges, UI)
- Palette: monochrome (consistent with `/strategy/`)
- Cards: text-forward, no image thumbnails on the cards themselves
- Assets (JPGs) open in a new tab when the user clicks "View page →"
- Wayback Machine pages open in a new tab when the user clicks "View archived page →"
- Sticky site header + sticky section nav with scroll-spy
- Responsive down to 360px

## Deployment

1. Copy the entire `copywriting/` folder into the root of the `nimrashakil.github.io` repo alongside `whitepapers/`, `strategy/`, `index.html`, `writing.html`, etc.
2. Commit and push. GitHub Pages will serve it at `https://nimrashakil.github.io/copywriting/`.
3. Replace the Copywriting cards section on `writing.html` with the teaser block (see the updated `writing.html` delivered alongside this folder).

No build step. No external fonts loaded beyond system-fallback Georgia and Helvetica. The page is a single self-contained HTML file.

## Filename rules (carried forward)

- All lowercase
- Hyphens only, no underscores
- No capitals, no spaces
- PDFs and JPGs are byte-identical to the source files with only the filename changed
