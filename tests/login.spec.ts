import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login/LoginPage';

test('successful login with valid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/.*inventory/);
});
//negative test
test('Failed Login with Invalid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('wrong_user', 'wrong_pass');
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain("Epic sadface");
  console.log(`>>> Error Message: ${errorMessage}`);
  
 // await expect(await loginPage.getErrorMessage()).toContain('Username and password do not match');
});
