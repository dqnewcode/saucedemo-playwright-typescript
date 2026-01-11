import { Page } from '@playwright/test';
import { homeLocators } from './homeLocators';

export class HomePage {
  constructor(private page: Page) {}

  async addItemByIndex(index: number) {
    await this.page.locator(homeLocators.BTN_ADDTOCART).nth(index).click();
  }
//dapetin harga
  async getPrices(): Promise<number[]> {
    const prices = await this.page.$$eval(homeLocators.LBL_PRICE, els =>
      els.map(el => parseFloat(el.textContent.replace('$', '')))
    );

    console.log('===== ITEM PRICES PICKED =====');
    console.log(prices);
    console.log('==============================');

    return prices;
  }
// click keranjang
  async goToCart() {
    await this.page.click(homeLocators.BTN_CART);
  }
// select high to  low
   async sortHighToLow() {
    await this.page.selectOption(homeLocators.sortDropdown, 'hilo');
    console.log('>>> Sorting High to Low applied');
  }
// dapetin semyua harga home
  async getAllPrices(): Promise<number[]> {
    const priceTexts = await this.page.$$eval(
      homeLocators.LBL_PRICE,
      els => els.map(el => el.textContent!.replace('$','').trim())
    );

    return priceTexts.map(p => parseFloat(p));
  }


}
