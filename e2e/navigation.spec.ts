import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display navbar with logo', async ({ page }) => {
    const logo = page.locator('app-navbar a[routerLink="/"]', { hasText: 'Federica Moro' });
    await expect(logo).toBeVisible();
  });

  test('should display all navigation links', async ({ page }) => {
    await expect(page.locator('app-navbar a[routerLink="/"]', { hasText: 'Home' })).toBeVisible();
    await expect(
      page.locator('app-navbar a[routerLink="/projects"]', { hasText: 'Projects' }),
    ).toBeVisible();
    await expect(
      page.locator('app-navbar a[routerLink="/contact"]', { hasText: 'Contact' }),
    ).toBeVisible();
  });

  test('should navigate to Projects page', async ({ page }) => {
    await page.click('app-navbar a[routerLink="/projects"]');
    await expect(page).toHaveURL(/projects/);
    await expect(page.locator('h1')).toContainText('Projects');
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.click('app-navbar a[routerLink="/contact"]');
    await expect(page).toHaveURL(/contact/);
    await expect(page.locator('header h1')).toContainText('create');
  });

  test('should navigate back to Home from Projects', async ({ page }) => {
    await page.click('app-navbar a[routerLink="/projects"]');
    await page.click('app-navbar a[routerLink="/"]', { hasText: 'Home' });
    await expect(page).toHaveURL(/^http:\/\/localhost:4200\/?$/);
  });

  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Hamburger button should be visible
    const hamburger = page.locator('app-navbar button[aria-label="Toggle navigation"]');
    await expect(hamburger).toBeVisible();

    // Menu should be hidden initially
    const menu = page.locator('app-navbar ul');
    await expect(menu).not.toBeVisible();

    // Click hamburger to open menu
    await hamburger.click();
    await expect(menu).toBeVisible();

    // Click again to close
    await hamburger.click();
    await expect(menu).not.toBeVisible();
  });

  test('should add shadow on scroll', async ({ page }) => {
    const nav = page.locator('app-navbar nav');

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 100));
    await page.waitForTimeout(300);

    // Nav should have shadow class added
    const hasScrollClass = await nav.evaluate((el) => el.className.includes('shadow'));
    expect(hasScrollClass).toBeTruthy();
  });
});
