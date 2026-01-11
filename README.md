SauceDemo E2E Automation (Playwright + TypeScript)

Automated end-to-end tests for the demo e-commerce site using Playwright + TypeScript.

📦 Install Dependencies
npm install
npx playwright install

▶ How to Run Tests

Run all tests:

npx playwright test


Run with browser UI (headed mode):

npx playwright test --headed


Run specific test:

npx playwright test tests/checkoutE2E.spec.ts

📊 View HTML Report

After test execution:

npx playwright show-report

🌐 Target URL

https://www.saucedemo.com/

Test credentials:

username: standard_user
password: secret_sauce

📁 Folder Structure (Short)
locators/     --> selectors
pages/        --> page object classes
tests/        --> test cases
playwright.config.ts

🔍 Features Tested

Login

Product sorting (high → low)

Add to cart

Checkout process

Price calculation (subtotal, tax, total)
