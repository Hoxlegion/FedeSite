# Copilot Instructions

This is the personal portfolio website of **Federica Moro**, an Italian artist working in ceramics and textiles. Built with Angular (latest stable).

---

## Artist Context

**Artist**: Federica Moro
**Discipline**: Ceramics and textiles
**Based**: Italy

### Practice & Themes
- Hand-built and wheel-thrown ceramics (stoneware, earthenware, raku)
- Woven tapestry and hand-dyed natural fiber textiles (linen, wool, silk, cotton)
- Themes: tactile materials, memory, place, Italian landscape and light
- Slow making as a philosophy — process and time are part of the work
- Color as emotional language; surface and pattern as storytelling

### Work Categories (Projects page, `/projects`)
1. **Ceramics** — thrown, hand-built, and slab-built ceramic work
2. **Textiles** — woven tapestry, hand-dyed natural fibers, pattern
3. **More** — mixed media, studies, installation, studio documentation

### Tone of Voice
- Thoughtful, quiet, intentional
- Poetic but grounded — avoid generic "art-speak"
- Italic serif text for personal/lyrical moments (use Cormorant Garamond)
- Bold display font for structural headings (use Syne)

---

## Project Overview
- **Framework**: Angular 21 (standalone components, signals)
- **Styling**: Component-scoped CSS + global CSS variables in `src/styles.css`
- **Routing**: Angular Router — routes: `/`, `/projects`, `/contact`
- **Fonts**: Syne (display), Cormorant Garamond (serif/italic accents), DM Sans (body)
- **Build**: Angular CLI + esbuild

## Color Palette
All colors are defined as CSS variables in `src/styles.css`:
- `--coral: #C00010` — Deep red; accent, CTAs, active nav
- `--purple: #615D6C` — Muted mauve; secondary, dark sections, inspiration bg
- `--lime: #D2ED96` — Sage green; highlights, footer accents, icon colors
- `--cream: #C9D9FC` — Soft sky blue; main page background
- `--charcoal: #1C1C1E` — Near-black; primary text, dark-bg sections
- `--sand: #EEF3FF` — Off-white blue; alternating section backgrounds
- `--white: #FFFFFF`

**Never introduce new colors** without updating `src/styles.css` with a CSS variable.

## File Structure
```
src/
  styles.css                      ← global CSS variables, reset, shared utilities
  index.html                      ← Google Fonts imports, page title
  app/
    app.ts / app.html / app.css   ← root shell with navbar + router-outlet + footer
    app.config.ts                 ← providers (router, etc.)
    app.routes.ts                 ← route definitions
    navbar/                       ← NavbarComponent (fixed top nav, hamburger)
    footer/                       ← FooterComponent (dark footer, social links)
    pages/
      home/                       ← HomeComponent (hero, about, featured, inspiration, CTA)
      gallery/                    ← GalleryComponent (Projects page — 3 sections)
      contact/                    ← ContactComponent (reactive form + info sidebar)
```

> Note: The gallery component files are named `gallery.*` but serve the `/projects` route.

## Conventions
- Use Angular **standalone components** — always add imports array
- Use Angular **signals** (`signal()`, `computed()`) for reactive state
- Use `@for` / `@if` / `@switch` (Angular 17+ control flow) — not `*ngFor`/`*ngIf`
- Use `inject()` for dependency injection, not constructor injection
- Keep components small and focused — one concern per component
- Follow Angular style guide naming: files as `name.ts`, `name.html`, `name.css`
- TypeScript strict mode is enabled
- Never hardcode hex color values in templates or component CSS — always use CSS variables

## Content Placeholders (to replace with real content)
- Artwork images: currently using CSS gradient placeholders in `gallery.ts` and `home.ts`
- Email: `hello@fede.art` (update in `footer.html` and `contact.html`)
- Social links: `#` placeholders (Instagram, Behance, Pinterest)
- Project titles/mediums/years: update in `gallery.ts` to match actual works

