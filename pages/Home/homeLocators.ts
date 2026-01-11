import { Page, Locator } from '@playwright/test';

export const homeLocators = {
   BTN_ADDTOCART: '[data-test^="add-to-cart"]',
  BTN_CART: '[data-test="shopping-cart-link"]',
  //BTN_FILTER: '[data-test="product-sort-container"]',

  BTN_MENU: (page: Page): Locator =>
    page.getByRole('button', { name: 'Open Menu' }),
    
  sortDropdown: '[data-test="product-sort-container"]',

  LBL_PRICE: '[data-test="inventory-item-price"]'
}
   
