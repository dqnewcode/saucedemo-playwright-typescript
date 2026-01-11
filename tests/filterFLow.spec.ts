import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login/LoginPage';
import { HomePage } from '../pages/Home/HomePage';

test('Sort High to Low → first item is most expensive', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new HomePage(page);

  await page.goto('/');
  await login.login('standard_user', 'secret_sauce');
  console.log('>>> Login successful');

  // Sorting
  await inventory.sortHighToLow();

  // Retrieve prices after sorting
  const prices = await inventory.getAllPrices();
  console.log('===== PRICE LOG =====');
  prices.forEach((p, i) => console.log(`Index ${i}: $${p}`));
  console.log('======================');

  // Validasi
  const highest = Math.max(...prices);
  const first = prices[0];

  console.log(`Highest = $${highest}`);
  console.log(`First   = $${first}`);

  expect(first).toBe(highest);
  console.log(highest+'adalah yang paling mahal');

});