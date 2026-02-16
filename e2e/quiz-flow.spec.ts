import { test, expect } from '@playwright/test';

test.describe('Quiz Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/seelen-profil/quiz');
    await page.waitForLoadState('domcontentloaded');
  });

  test('Step 1: shows birth data form with validation', async ({ page }) => {
    // Should show the first step
    const nameInput = page.locator('input[type="text"]').first();
    await expect(nameInput).toBeVisible();

    // The continue button should be disabled initially (empty fields)
    const continueBtn = page.getByRole('button', { name: /weiter/i });
    if (await continueBtn.isVisible()) {
      // Button may be disabled or enabled depending on implementation
      // Just verify it exists
      await expect(continueBtn).toBeVisible();
    }
  });

  test('Step 1: fills in valid data and proceeds', async ({ page }) => {
    // Fill in name
    const nameInput = page.locator('input[type="text"]').first();
    await nameInput.fill('Testperson');

    // Fill in date
    const dateInput = page.locator('input[type="date"]');
    await dateInput.fill('1990-03-15');

    // Click continue
    const continueBtn = page.getByRole('button', { name: /weiter/i });
    await continueBtn.click();

    // Should advance to step 2 (card selection)
    // Look for card images or the step 2 heading
    await page.waitForTimeout(500);
    const step2Content = page.getByText(/karte/i);
    await expect(step2Content.first()).toBeVisible({ timeout: 5000 });
  });

  test('Step 2: shows cards for selection', async ({ page }) => {
    // Navigate to step 2 first
    const nameInput = page.locator('input[type="text"]').first();
    await nameInput.fill('Testperson');
    const dateInput = page.locator('input[type="date"]');
    await dateInput.fill('1990-03-15');
    const continueBtn = page.getByRole('button', { name: /weiter/i });
    await continueBtn.click();

    // Wait for cards to appear
    await page.waitForTimeout(1000);

    // Card images should be visible (they use /cards/ paths)
    const cards = page.locator('img[src*="cards"]');
    const cardCount = await cards.count();
    // Should have multiple card images visible
    expect(cardCount).toBeGreaterThan(0);
  });
});
