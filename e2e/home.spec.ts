import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Federica Moro/);
  });

  test('should display artist name in hero', async ({ page }) => {
    const heading = page.locator('h1').first();
    await expect(heading).toContainText('Federica');
    await expect(heading).toContainText('Moro');
  });

  test('should display tagline', async ({ page }) => {
    await expect(page.locator('section').first().locator('text=Ceramics & textiles')).toBeVisible();
  });

  test('should have working CTA buttons', async ({ page }) => {
    // Find the hero section buttons (first section on page)
    const heroSection = page.locator('section').first();
    const projectsBtn = heroSection.locator('a[routerLink="/projects"]');
    const contactBtn = heroSection.locator('a[routerLink="/contact"]');

    await expect(projectsBtn).toBeVisible();
    await expect(contactBtn).toBeVisible();
    await expect(projectsBtn).toContainText('View Projects');
    await expect(contactBtn).toContainText('Get in Touch');
  });

  test('should display about section', async ({ page }) => {
    await expect(page.locator('text=About Me')).toBeVisible();
    await expect(page.locator('text=Where material')).toBeVisible();
  });

  test('should display featured works', async ({ page }) => {
    await expect(page.locator('text=Selected Works')).toBeVisible();
    const articles = page.locator('article');
    await expect(articles).not.toHaveCount(0);
  });

  test('should display inspiration section', async ({ page }) => {
    await expect(page.locator('text=Inspiration')).toBeVisible();
    await expect(page.locator('text=Nature & Materials')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });
});
