import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads and shows hero section', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Elfenorakel/i);
    // Hero section should be visible
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('shows key sections', async ({ page }) => {
    await page.goto('/');

    // Wait for page to load
    await page.waitForLoadState('domcontentloaded');

    // Check for main content areas
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Footer should be present
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('header navigation is present', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('has correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Elfenorakel/i);
  });
});
