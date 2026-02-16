import { test, expect } from '@playwright/test';

const PAGES = [
  { path: '/', name: 'Home' },
  { path: '/readings', name: 'Readings' },
  { path: '/tarot', name: 'Tarot' },
  { path: '/ueber-elfi', name: 'Über Elfi' },
  { path: '/seelen-profil', name: 'Seelen-Profil' },
  { path: '/impressum', name: 'Impressum' },
  { path: '/datenschutz', name: 'Datenschutz' },
  { path: '/agb', name: 'AGB' },
];

test.describe('Navigation', () => {
  for (const { path, name } of PAGES) {
    test(`${name} (${path}) loads without error`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);

      // Every page should have a header and footer
      const header = page.locator('header');
      await expect(header).toBeVisible();

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });
  }
});
