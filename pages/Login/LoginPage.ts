import { Page } from '@playwright/test';
import { loginLocators } from './loginLocators'

// All fungsion for login page
export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }
//FUNGSION LOGIN
  async login(username: string, password: string) {
    await this.page.fill(loginLocators.FLD_USERNAME,username);
    await this.page.fill(loginLocators.FLD_PASSWORD,password);
    await this.page.click(loginLocators.BTN_LOGIN);
  }


  async getErrorMessage() {
    return await loginLocators.errorHeading(this.page).innerText();
  }
}
