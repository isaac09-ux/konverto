# CLAUDE.md — KONVERTO

This file provides guidance for AI assistants working on the KONVERTO codebase.

## Project Overview

KONVERTO is a Spanish-language copywriting agency landing page. The service offers free ad rewrites for Mexican businesses (Facebook/Instagram Meta Ads) to demonstrate value before any payment. The site is a single-page marketing landing page, not an application with backend logic.

**Live URL:** https://konverto.vercel.app
**Target market:** Small businesses in Chihuahua and across Mexico (es_MX locale)
**Language:** All user-facing content is in Spanish

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Astro | 5.5.2 | Static site generator (SSG) |
| TypeScript | 5.9.3 | Type safety (strict mode) |
| @vercel/speed-insights | 1.3.1 | Performance monitoring |
| @astrojs/check | 0.9.6 | Astro type checking |

**No CSS framework** — all styles are custom CSS written inline in `src/pages/index.astro`. The README mentions Tailwind but it is NOT installed or used.

## Repository Structure

```
konverto/
├── src/
│   └── pages/
│       └── index.astro       # Entire site (HTML + CSS + JS, ~2000 lines)
├── public/
│   ├── klara-voss.jpg        # Founder profile photo (475 KB)
│   ├── favicon.svg           # Brand favicon
│   ├── og-image.svg          # OpenGraph preview image
│   ├── manifest.webmanifest  # PWA manifest
│   ├── robots.txt            # SEO directives
│   ├── sitemap.xml           # Single-page sitemap
│   └── sw.js                 # Service Worker (PWA, cache strategy)
├── .github/
│   └── workflows/
│       └── astro.yml         # CI: type check + build on push to main
├── astro.config.mjs          # Astro config (output: static)
├── tsconfig.json             # Extends astro/tsconfigs/strict
├── vercel.json               # Vercel deployment config + security headers
├── package.json              # Dependencies and scripts
└── README.md                 # Project description (Spanish)
```

**Note:** There are no `src/components/` or `src/layouts/` directories. The README describes a planned structure that was not implemented — the entire site lives in `index.astro`.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start local dev server (http://localhost:4321)
npm run check        # Run Astro + TypeScript type checking
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build locally
```

Always run `npm run check` before committing to catch TypeScript errors.

## Brand Identity — Must Follow

These constraints are non-negotiable when modifying any visual or copy elements:

### Colors (CSS Custom Properties)
```css
--lime: #BFFF00          /* Primary accent — lime green */
--lime-dim: rgba(191,255,0,0.12)
--lime-dim2: rgba(191,255,0,0.06)
--lime-glow: rgba(191,255,0,0.15)
--dark: #0A0A0A          /* Primary background */
--dark2: #101114
--dark3: #1C1D21
--dark4: #2A2C31
--dark5: #343741
--lime-dark: #84AC00
--white: #F2F2ED         /* Body text */
--gray: #666
--gray2: #999
--red-dim: rgba(255,68,68,0.1)
```

### Typography
- **Outfit** (weights 400–900) — Headlines, display text
- **DM Sans** (weights 300–600, italic) — Body text, descriptions
- Both loaded from Google Fonts CDN
- Titles use `font-weight: 900` (Outfit)

### Logo Rules
- Always written in UPPERCASE: **KONVERTO**
- The "K" is always accented in lime (`--lime`) color
- Never use lowercase for the brand name

### Tone of Voice
- Direct, bold, conversion-focused copy
- No filler words or corporate speak
- Spanish only for all user-facing content
- First person plural ("nosotros") for the agency

## Code Architecture

### index.astro Structure

The file is divided into three sections per Astro convention:

1. **Frontmatter** (lines 1–3): Component imports only
   ```astro
   ---
   import SpeedInsights from '@vercel/speed-insights/astro';
   ---
   ```

2. **HTML Template**: Complete page structure with sections in this order:
   - `<head>` — meta, SEO, fonts, JSON-LD schema, CSS
   - `<nav>` — Logo + CTA + hamburger menu
   - `.hero` — Main headline with glow effects
   - `.ticker-wrap` — Scrolling banner with rotating messages
   - `.problema` — Pain point section
   - `.before-after` — Case study comparisons
   - `.oferta` — Service offerings
   - `.proceso` — How it works
   - `.precios` — Pricing plans
   - `.garantia` — Guarantee section
   - `.quienes-somos` — Founder profiles
   - `.faq` — Accordion FAQ
   - `.cta-final` — Bottom call to action
   - `<footer>` — Links and copyright

3. **Inline `<style>` block**: All CSS (~1,400 lines) embedded in `<head>`

4. **Inline `<script>` block**: All JavaScript at the bottom of `<body>`

### CSS Conventions

- All styles are in a single `<style>` block in `<head>` (no external CSS files)
- Use CSS custom properties (`var(--lime)`, `var(--dark)`, etc.) — never hardcode color values
- Class naming follows BEM-inspired patterns: `.nav-logo`, `.hero-headline`, `.faq-question`
- Use `clamp()` for fluid/responsive typography: `font-size: clamp(2rem, 5vw, 4rem)`
- Mobile-first approach with `@media (max-width: 768px)` breakpoints

### JavaScript Conventions

- Vanilla JavaScript only (no frameworks)
- TypeScript type annotations in `<script>` tags
- Use `querySelector` / `querySelectorAll` for DOM access
- `IntersectionObserver` for scroll-triggered reveal animations
- `requestAnimationFrame` for smooth cursor animation
- Event listeners added after DOM is ready (bottom of body)
- Global functions exposed via `(window as any).functionName` for inline event handlers

### Key JavaScript Features

- **Custom cursor**: Tracks mouse position with `requestAnimationFrame`; applies `.hovering` class on interactive elements
- **Mobile menu**: Hamburger toggle with overlay; close exposed as `window.closeMenu`
- **FAQ accordion**: Single-open behavior using `querySelectorAll` and `classList.toggle`
- **Scroll reveals**: `IntersectionObserver` adds `.visible` class to `.reveal` elements
- **Ticker animation**: CSS `@keyframes` infinite scroll animation

## Service Worker

`public/sw.js` implements a PWA cache strategy:

- **Cache name:** `konverto-v2` — increment version when assets change to force cache refresh
- **Network-first** for HTML (always fresh content)
- **Cache-first** for static assets (images, fonts, etc.)
- **Precached files:** `/`, `/favicon.svg`, `/og-image.svg`, `/klara-voss.jpg`, `/manifest.webmanifest`

When adding new static assets, add them to the precache list in `sw.js`.

## SEO & Metadata

- **Canonical URL:** `https://konverto.vercel.app/`
- **Locale:** `es_MX`
- **Schema.org type:** `ProfessionalService`
- **OpenGraph + Twitter cards** configured in `<head>`
- Update `public/sitemap.xml` if new pages are ever added
- `public/robots.txt` allows all crawlers

## Deployment

**Platform:** Vercel (automatic via GitHub integration)

**CI/CD pipeline** (`.github/workflows/astro.yml`):
1. Triggered on push to `main`, any PR, or manual dispatch
2. Node.js 20 with npm cache
3. `npm install` → `npm run check` → `npm run build`
4. Vercel deploys automatically if CI passes

**Security headers** (configured in `vercel.json`):
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

**Cache policies** (configured in `vercel.json`):
- HTML: no cache (always fresh)
- SVG, webmanifest, xml, txt: 24 hours
- Images (jpg, png, webp, avif, gif): 1 year immutable

## Contact / CTA

All call-to-action links point to WhatsApp: `https://wa.me/526145468144`
Do not change this URL without explicit instruction.

## What Does NOT Exist

To avoid confusion from the README description:
- No `src/components/` directory
- No `src/layouts/` directory
- No Tailwind CSS (despite README mention)
- No `tailwind.config.js`
- No backend, API, or database
- No unit tests (Jest, Vitest, etc.)
- No E2E tests (Playwright, Cypress)
- No Docker or containerization
- No environment variables or `.env` files

## Common Tasks

### Adding a new section to the page
1. Add HTML in `src/pages/index.astro` at the appropriate position in `<body>`
2. Add corresponding CSS in the `<style>` block, using existing custom properties
3. If it needs scroll animations, add the `.reveal` class and it will animate automatically
4. Run `npm run check` and `npm run build` to validate

### Changing copy (text content)
- Edit directly in `src/pages/index.astro`
- Keep all copy in Spanish
- Maintain the direct, conversion-focused tone
- Do not soften CTAs or add unnecessary qualifiers

### Adding images
1. Place the file in `public/`
2. Reference as `/filename.ext` in the HTML
3. Add to the precache list in `public/sw.js`
4. Images should be optimized before adding (the project has no build-time image optimization)

### Modifying styles
- Always use CSS custom properties for colors — never hardcode hex values
- Add new custom properties to the `:root` block if needed
- Test at mobile (`max-width: 768px`) and desktop breakpoints

### Updating the Service Worker cache
- When deploying significant asset changes, update `cache name` in `public/sw.js` from `konverto-v2` to the next version (e.g., `konverto-v3`)
- Also update the cache name reference in the fetch event handler in the same file
