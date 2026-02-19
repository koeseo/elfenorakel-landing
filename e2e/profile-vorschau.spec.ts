import { test, expect } from '@playwright/test';

test.describe('Profil Vorschau', () => {
  test('redirects when no profile ID is given', async ({ page }) => {
    const response = await page.goto('/seelen-profil/vorschau');
    // Should either redirect or show an error/empty state
    // The page should still load without crashing
    expect(response?.status()).toBeLessThan(500);
  });

  test('handles invalid profile ID gracefully', async ({ page }) => {
    const response = await page.goto('/seelen-profil/profil/invalid-uuid-12345');
    // Should redirect to vorschau or show "not found"
    expect(response?.status()).toBeLessThan(500);
  });

  test('seelen-profil landing page loads correctly', async ({ page }) => {
    await page.goto('/seelen-profil');
    await expect(page.getByText(/Seelen-Profil/i).first()).toBeVisible();

    // Should show pricing tiers
    const body = await page.textContent('body');
    expect(body).toContain('49');
    expect(body).toContain('69');
    expect(body).toContain('99');
  });
});
