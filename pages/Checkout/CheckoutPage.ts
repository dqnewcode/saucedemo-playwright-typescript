import { Page, expect } from '@playwright/test';
import { checkoutLocator } from './checkoutLocators';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillCustomerInfo(first: string, last: string, postal: string) {
    await this.page.fill(checkoutLocator.FLD_FIRSTUSERNAME, first);
    await this.page.fill(checkoutLocator.FLD_PASSWORDSEC, last);
    await this.page.fill(checkoutLocator.FLD_POSTALCODE, postal);
    await this.page.click(checkoutLocator.BTN_CONTINUE);
  }

 async validatePrices(expectedItemSubtotal: number) {
  const subtotalText = await this.page.locator(checkoutLocator.LBL_SUBTOTAL).innerText();
  const taxText = await this.page.locator(checkoutLocator.LBL_TAX).innerText();
  const totalText = await this.page.locator(checkoutLocator.LBL_TOTALSHOP).innerText();

  const subtotalUI = parseFloat(subtotalText.replace(/[^0-9.]/g, ''));
  const taxUI = parseFloat(taxText.replace(/[^0-9.]/g, ''));
  const totalUI = parseFloat(totalText.replace(/[^0-9.]/g, ''));

  // compute fee
  const fee = parseFloat((subtotalUI - expectedItemSubtotal).toFixed(2));

  // expected tax
  const expectedTax = parseFloat((subtotalUI * 0.08).toFixed(2));

  // expected total
  const expectedTotal = parseFloat((subtotalUI + expectedTax).toFixed(2));

  console.log('===== PRICE VALIDATION =====');
  console.log(`Item Total (Expected) : ${expectedItemSubtotal}`);
  console.log(`Fee Detected         : ${fee}`);
  console.log(`Subtotal UI          : ${subtotalUI}`);
  console.log(`Tax UI               : ${taxUI}`);
  console.log(`Total UI             : ${totalUI}`);
  console.log('--------------------------------');
  console.log(`Expected Tax (8%)     : ${expectedTax}`);
  console.log(`Expected Total        : ${expectedTotal}`);

  expect(taxUI).toBeCloseTo(expectedTax, 2);
  expect(totalUI).toBeCloseTo(expectedTotal, 2);
}

  

  async clickFinish() {
    await this.page.click(checkoutLocator.BTN_FINISH);
  }

  async expectOrderComplete() {
    await expect(this.page.locator(checkoutLocator.LBL_COMPLETEHEADER))
      .toHaveText(/Thank you for your order!/);
  }
}
