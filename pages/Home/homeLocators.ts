import { Page, Locator } from '@playwright/test';

export const homeLocators = {
   BTN_ADDTOCART: '[data-test^="add-to-cart"]',
  BTN_CART: '[data-test="shopping-cart-link"]',
  //BTN_FILTER: '[data-test="product-sort-container"]',

  BTN_MENU: (page: Page): Locator =>
    page.getByRole('button', { name: 'Open Menu' }),
    
  sortDropdown: '[data-test="product-sort-container"]',


//   sortDropdown: (page: Page): Locator =>
//     page.locator('[data-test="product_sort_container"]'),


  LBL_PRICE: '[data-test="inventory-item-price"]'
}
   
// page.locator('[data-test="shopping-cart-link"]');
// page.getByRole('button', { name: 'Open Menu' });
// page.locator('[data-test="product-sort-container"]');

// page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');