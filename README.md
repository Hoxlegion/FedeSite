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

This project uses **Vitest** for unit testing and **Playwright** for End-to-End testing, with comprehensive test coverage.

### Unit Tests

**59 unit tests** covering all components:

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests in CI mode (no watch)
npm run test:ci
```

### End-to-End Tests

**42 E2E tests** covering all user journeys with Playwright:

```bash
# Run E2E tests (headless)
npm run e2e

# Run E2E tests with UI (interactive mode)
npm run e2e:ui

# Run E2E tests with visible browser
npm run e2e:headed

# Debug E2E tests
npm run e2e:debug
```

Playwright automatically starts the dev server on port 4200 before running tests.

### Test Coverage

Test coverage is comprehensive across all components:

- ✅ **App Component** - Root component with routing
- ✅ **Navbar Component** - Navigation with mobile menu
- ✅ **Footer Component** - Footer with social links
- ✅ **Home Component** - Landing page with all sections
- ✅ **Gallery Component** - Projects gallery (Ceramics, Textiles, More)
- ✅ **Contact Component** - Contact form with validation

**E2E Test Suites:**
- ✅ **Home Page** (8 tests) - Hero, CTA buttons, sections, responsiveness
- ✅ **Navigation** (8 tests) - Links, routing, mobile menu, scroll effects
- ✅ **Gallery/Projects** (9 tests) - Gallery sections, items, hover effects, layouts
- ✅ **Contact** (11 tests) - Form validation, submission, responsiveness
- ✅ **Accessibility** (8 tests) - Page titles, alt text, keyboard nav, performance

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
     - **Unit Tests** - Vitest running all 59 tests
     - **E2E Tests** - Playwright running all 42 end-to-end tests
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

## �️ Branch Protection & Pre-commit Hooks

### Pre-commit Hooks (Husky + lint-staged)

This project uses **Husky** and **lint-staged** to automatically lint and format code before every commit.

**What runs on commit:**
- **TypeScript/HTML files** → ESLint auto-fix + Prettier format
- **CSS/JSON files** → Prettier format

The hooks are configured in `.husky/pre-commit` and `package.json` (lint-staged section).

### Branch Protection Rules

To protect the `main` branch and ensure code quality, configure branch protection rules on GitHub:

1. Navigate to **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. **Enable the following protections:**

#### Required Status Checks
- ✅ **Require status checks to pass before merging**
  - Required checks:
    - `code-quality` (ESLint + Prettier + npm audit)
    - `test` (59 unit tests)
    - `e2e-tests` (42 E2E tests)
    - `build` (production build)

#### Pull Request Requirements
- ✅ **Require a pull request before merging**
  - Required approvals: 1+
  - Dismiss stale PR approvals when new commits are pushed
  - Require review from Code Owners
- ✅ **Require conversation resolution before merging**

#### Additional Protections
- ✅ **Require linear history** (no merge commits)
- ✅ **Do not allow bypassing the above settings**
- ✅ **Restrict who can push to matching branches**
  - Only maintainers and admins

#### Recommended Additional Rules
- ✅ **Require signed commits** (optional but recommended)
- ✅ **Include administrators** (apply rules even to admins)

### Workflow

With branch protection enabled:
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit (pre-commit hook runs automatically)
3. Push: `git push origin feature/your-feature`
4. Open Pull Request on GitHub
5. Wait for all CI checks to pass (quality, tests, build, E2E)
6. Request review from team member
7. Address review comments
8. Merge when approved and all checks pass

## �📁 Project Structure

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

- **Framework**: Angular 21 (standalone components, signals, zoneless)
- **UI Library**: ng-zorro-antd 21
- **Styling**: Tailwind CSS 3
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Linting**: ESLint + TypeScript ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
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
