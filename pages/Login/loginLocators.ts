import { Page, Locator } from '@playwright/test';
export const loginLocators = {
   TEXT_PAGE : '[data-test="title"]',
   FLD_USERNAME : '[data-test="username"]',
   FLD_PASSWORD : '[data-test="password"]',
   BTN_LOGIN :'[data-test="login-button"]',
   errorHeading: (page: Page): Locator =>
    page.getByRole('heading', {
      name: 'Epic sadface: Username and password do not match any user in this service',
      level: 3
    })

}

   
 