import { test } from '@playwright/test';

test('setup page for exploration', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
});
