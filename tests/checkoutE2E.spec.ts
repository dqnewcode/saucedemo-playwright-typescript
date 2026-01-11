import { test } from '@playwright/test';
import { LoginPage } from '../pages/Login/LoginPage';
import { HomePage } from '../pages/Home/HomePage';
import { CartPage } from '../pages/Cart/CartPage';
import { CheckoutPage } from '../pages/Checkout/CheckoutPage';

test('E2E Checkout + validate item prices, subtotal, tax & total', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new HomePage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await page.goto('/');
  await login.login('standard_user', 'secret_sauce');

  // Add 2 items
  await inventory.addItemByIndex(0);
  await inventory.addItemByIndex(1);

  // Get prices for all items on page
  const itemPrices = await inventory.getPrices();

  // Calculate expected subtotal based on selected items
  const expectedSubtotal = parseFloat(
    (itemPrices[0] + itemPrices[1]).toFixed(2)
  );
  console.log(`>>> Expected Subtotal from 2 items: ${expectedSubtotal}`);

  // Go to cart
  await inventory.goToCart();

  // Validate cart count = 2
 await cart.expectCartCount(2);

  // Checkout flow
  await cart.clickCheckout();
  await checkout.fillCustomerInfo('John', 'Doe', '12345');

  // Validate UI subtotal, tax, total
  await checkout.validatePrices(expectedSubtotal);

  // Finish order
  await checkout.clickFinish();
  await checkout.expectOrderComplete();
});
