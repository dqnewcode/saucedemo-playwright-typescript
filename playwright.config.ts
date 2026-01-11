import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // <-- make sure this folder name is correct!
  use: {
    //headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'on', //retain-on-failure
    baseURL: 'https://www.saucedemo.com',
  },
  reporter: [['html', { open: 'always' }]], // <--  enables HTML report
});
