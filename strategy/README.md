# /strategy/ Subpage

Standalone subpage at `https://nimrashakil.github.io/strategy/` hosting twelve strategic documents produced across the seven-website portfolio, plus the Portfolio Overview Deck as a featured download.

## Structure

```
strategy/
├── index.html       # Self-contained page with inline styles, no external deps
├── README.md        # This file
└── pdfs/            # 13 PDFs (12 strategy docs + 1 portfolio overview deck)
```

## Contents

### Portfolio Overview Deck (featured, above the grid)
- `nimra-shakil-seo-portfolio.pdf` — 10-page visual summary of SEO work across all seven sites

### 12 strategy documents, grouped by client

**Minimal (1)**
- `minimal-semaglutide-competitor-analysis.pdf` — 5 pages

**ParkingMD (2)**
- `parkingmd-blog-topics-competitor-analysis.pdf` — 5 pages
- `parkingmd-campaign-structure.pdf` — 6 pages

**Wellness Wag (3)**
- `ww-content-analysis.pdf` — 7 pages
- `ww-affiliate-program-growth-plan.pdf` — 7 pages
- `affiliate-training-workshops.pdf` — 3 pages

**LeafyRX (1)**
- `leafyrx-patient-education-guide.pdf` — 14 pages

**Leafy Rewards (2)**
- `keyword-gap-analysis.pdf` — 4 pages
- `cannabis-legalization-pages-architecture.pdf` — 7 pages

**TRT Telehealth (1)**
- `trt-blog-series-outline.pdf` — 5 pages

**Cross Even Operations (2)**
- `ai-content-production.pdf` — 11 pages
- `wp-development-workflow-standards.pdf` — 4 pages

## Design language

- Typography: Georgia (body) + Helvetica Neue (headers, badges, UI)
- Palette: monochrome (no color accents, no client branding)
- Cards: text-forward, no image containers
- Subtle badge color-coding by category (ink / medium / light gray) to visually cluster document types without introducing color
- Sticky site header + sticky section nav with scroll-spy
- Responsive down to 360px

## Deployment

1. Copy the entire `strategy/` folder into the root of the `nimrashakil.github.io` repo alongside `whitepapers/`, `index.html`, `writing.html`, etc.
2. Commit and push. GitHub Pages will serve it at `https://nimrashakil.github.io/strategy/`.
3. Replace the Strategic Documents section on `writing.html` with the teaser block (see `writing-teaser-block.html` for the snippet).

No build step. No external fonts loaded beyond system-fallback Georgia and Helvetica. The page is a single self-contained HTML file.

## Filename rules (carried forward)

- All lowercase
- Hyphens only, no underscores
- No capitals, no spaces
- PDFs are byte-identical to the source files in `/mnt/user-data/outputs/` with only the filename changed

## Notes for future changes

- If a new strategy document is added, drop the PDF into `pdfs/` (lowercase-hyphen name) and add a new `<article class="doc-card">` block to the appropriate client section in `index.html`.
- Section-nav tabs and section counts update automatically via the scroll-spy JavaScript; just update the `section-count` span and the anchor list at the top.
- If a new client is added, add a new `<section>` block and an entry to the section-nav list.
