# Federica Moro - Portfolio Website

This is the personal portfolio website of **Federica Moro**, an Italian artist working in ceramics and textiles.

Built with **Angular 21** (standalone components, signals), **ng-zorro-antd**, and **Tailwind CSS**.

## 🎨 About

Federica Moro is an artist based in Italy, working primarily in:
- **Ceramics** — hand-built and wheel-thrown stoneware, earthenware, and raku
- **Textiles** — woven tapestry and hand-dyed natural fiber work (linen, wool, silk, cotton)

The site showcases her work and provides a way to get in touch.

## 🚀 Development

### Prerequisites

- Node.js 20+
- npm 11+

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

This project uses **Vitest** for unit testing with comprehensive test coverage.

### Run Tests

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run tests in CI mode (no watch)
npm run test:ci
```

### Test Coverage

Test coverage reports are generated in the `coverage/` directory. The project maintains high test coverage across all components:

- ✅ **App Component** - Root component with routing
- ✅ **Navbar Component** - Navigation with mobile menu
- ✅ **Footer Component** - Footer with social links
- ✅ **Home Component** - Landing page with all sections
- ✅ **Gallery Component** - Projects gallery (Ceramics, Textiles, More)
- ✅ **Contact Component** - Contact form with validation

## 🔍 Code Quality

### Linting

ESLint is configured with TypeScript and Angular-specific rules.

```bash
# Run linter
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### Formatting

Prettier is used for consistent code formatting.

```bash
# Format code
npm run format

# Check if code is formatted
npm run format:check
```

### Run All Checks

```bash
# Run all quality checks (lint, format, test, build)
npm run ci
```

## 🔒 Security

### NPM Audit

The project uses `npm audit` to check for security vulnerabilities in dependencies.

```bash
npm audit
```

### Automated Security Checks

- **Dependabot** - Automatically creates PRs for dependency updates
- **GitHub Actions** - Runs security audits on every push and daily
- **Dependency Review** - Reviews dependencies in pull requests

## 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration and deployment:

### Workflows

1. **CI/CD Pipeline** (`.github/workflows/ci.yml`)
   - Runs on push to `main` and `develop` branches
   - Runs on all pull requests
   - Jobs:
     - **Code Quality & Security** - ESLint, Prettier, npm audit
     - **Unit Tests** - Vitest with coverage reporting
     - **Build** - Production build and artifact upload
     - **Lighthouse** - Performance audit on PRs

2. **Security Checks** (`.github/workflows/security.yml`)
   - Runs daily at 2 AM UTC
   - Runs on pushes to `main`
   - Jobs:
     - **NPM Security Audit** - Comprehensive security scan
     - **Dependency Review** - Reviews new dependencies

### Status Badges

Add these to show build status (update with your repository URL):

```markdown
![CI/CD](https://github.com/yourusername/FedeSite/workflows/CI%2FCD%20Pipeline/badge.svg)
![Security](https://github.com/yourusername/FedeSite/workflows/Security%20Checks/badge.svg)
```

## 📁 Project Structure

```
src/
  styles.css                      ← global CSS variables, Tailwind config
  index.html                      ← Google Fonts imports
  app/
    app.ts / app.html / app.css   ← root shell with navbar + footer
    app.config.ts                 ← Angular providers
    app.routes.ts                 ← route definitions
    navbar/                       ← Navigation component
    footer/                       ← Footer component
    pages/
      home/                       ← Home page (hero, about, featured work)
      gallery/                    ← Projects page (3 gallery sections)
      contact/                    ← Contact form page
```

## 🎨 Design System

### Colors

All colors are defined as CSS variables in `src/styles.css`:

- `--coral: #C00010` — Accent, CTAs, active nav
- `--purple: #615D6C` — Secondary, dark sections
- `--lime: #D2ED96` — Highlights, accents
- `--cream: #C9D9FC` — Main page background
- `--charcoal: #1C1C1E` — Primary text
- `--sand: #EEF3FF` — Alternating backgrounds

### Typography

- **Syne** - Display font for headings
- **Cormorant Garamond** - Serif/italic accents
- **DM Sans** - Body text

## 🛠️ Tech Stack

- **Framework**: Angular 21 (standalone components, signals)
- **UI Library**: ng-zorro-antd
- **Styling**: Tailwind CSS 3
- **Testing**: Vitest + Angular Testing Library
- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions
- **Security**: npm audit + Dependabot

## 📝 Conventions

- Use Angular **standalone components**
- Use Angular **signals** for reactive state
- Use `@for` / `@if` / `@switch` control flow (not `*ngFor`/`*ngIf`)
- Use `inject()` for DI, not constructor injection
- TypeScript strict mode enabled
- Always use CSS variables for colors

## 📄 License

Copyright © 2026 Federica Moro. All rights reserved.

## 🤝 Contributing

This is a personal portfolio website. For inquiries, please use the contact form on the website.
