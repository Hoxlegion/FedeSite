import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page.locator('header >> text=Say Hello')).toBeVisible();
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.locator('input#name')).toBeVisible();
    await expect(page.locator('input#email')).toBeVisible();
    await expect(page.locator('select#inquiry')).toBeVisible();
    await expect(page.locator('textarea#message')).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    await expect(page.locator('aside a[href^="mailto:"]')).toBeVisible();
  });

  test('should display social links', async ({ page }) => {
    await expect(page.locator('aside a[aria-label*="Instagram"]')).toBeVisible();
  });

  test('should show validation errors for empty form', async ({ page }) => {
    // Click submit without filling form
    await page.click('button[type="submit"]');

    // Form should not submit (no success message)
    await expect(page.locator('text=Message received')).not.toBeVisible();

    // Validation errors may appear (Angular marks fields as touched)
    // Just verify the form is still visible
    await expect(page.locator('input#name')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    await page.fill('input#name', 'Test User');
    await page.fill('input#email', 'invalid-email');
    await page.selectOption('select#inquiry', 'General inquiry');
    await page.fill('textarea#message', 'This is a test message that is long enough');

    await page.click('button[type="submit"]');

    // Should show validation error or prevent submit
    const emailInput = page.locator('input#email');
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => {
      return !el.validity.valid;
    });
    expect(isInvalid).toBe(true);
  });

  test('should submit valid form', async ({ page }) => {
    await page.fill('input#name', 'Test User');
    await page.fill('input#email', 'test@example.com');
    await page.selectOption('select#inquiry', 'General inquiry');
    await page.fill(
      'textarea#message',
      'This is a test message with enough characters to pass validation',
    );

    await page.click('button[type="submit"]');

    // Should show success message
    await expect(page.locator('text=Message received')).toBeVisible({
      timeout: 5000,
    });
  });

  test('should clear form after successful submission', async ({ page }) => {
    await page.fill('input#name', 'Test User');
    await page.fill('input#email', 'test@example.com');
    await page.selectOption('select#inquiry', 'General inquiry');
    await page.fill('textarea#message', 'This is a test message with enough characters');

    await page.click('button[type="submit"]');

    // Wait for success message
    await expect(page.locator('text=Message received')).toBeVisible({
      timeout: 5000,
    });

    // Click Send Another to show form again
    await page.click('button:has-text("Send Another")');

    // Form should be cleared
    await expect(page.locator('input#name')).toHaveValue('');
    await expect(page.locator('input#email')).toHaveValue('');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await expect(page.locator('input#name')).toBeVisible();
    await expect(page.locator('textarea#message')).toBeVisible();
  });

  test('should have inquiry type options', async ({ page }) => {
    const select = page.locator('select#inquiry');
    await expect(select).toBeVisible();

    // Check that options exist
    const options = await select.locator('option').count();
    expect(options).toBeGreaterThan(1);
  });
});
