import { Page, expect } from '@playwright/test';
import { cartLocator } from './cartLocators';

export class CartPage {
  constructor(private page: Page) {}

  async expectCartCount(count: number) {
    const items = await this.page.locator(cartLocator.CART_ITEM).count();
    expect(items).toBe(count);
  }

  async clickCheckout() {
    await this.page.click(cartLocator.BTN_CHECKOUT);
  }
}
