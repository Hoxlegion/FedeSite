import { test, expect } from '@playwright/test';

test.describe('Gallery (Projects) Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Projects');
  });

  test('should display ceramics section', async ({ page }) => {
    await expect(page.locator('h2', { hasText: 'Ceramics' })).toBeVisible();
    await expect(page.locator('text=Hand-built and wheel-thrown forms')).toBeVisible();
  });

  test('should display textiles section', async ({ page }) => {
    await expect(page.locator('h2', { hasText: 'Textiles' })).toBeVisible();
    await expect(page.locator('text=Woven and hand-dyed works')).toBeVisible();
  });

  test('should display more section', async ({ page }) => {
    await expect(page.locator('h2', { hasText: 'More' })).toBeVisible();
    await expect(page.locator('text=Mixed media, sketchbook studies')).toBeVisible();
  });

  test('should display gallery items', async ({ page }) => {
    const articles = page.locator('article');
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should show item details on hover (desktop)', async ({ page }) => {
    const firstItem = page.locator('article').first();
    await firstItem.hover();

    // Title should be visible on hover
    const title = firstItem.locator('h3');
    await expect(title).toBeVisible();
  });

  test('should have proper grid layout on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const articles = page.locator('article');
    await expect(articles.first()).toBeVisible();

    // Check that grid is rendering properly
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have proper grid layout on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

    const articles = page.locator('article');
    await expect(articles.first()).toBeVisible();

    // Check multiple columns are visible
    const count = await articles.count();
    expect(count).toBeGreaterThan(3);
  });

  test('should display section labels', async ({ page }) => {
    await expect(page.locator('.section-label', { hasText: '01' })).toBeVisible();
    await expect(page.locator('.section-label', { hasText: '02' })).toBeVisible();
    await expect(page.locator('.section-label', { hasText: '03' })).toBeVisible();
  });
});
