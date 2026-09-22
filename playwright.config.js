// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: 'html',

  /* Shared settings for all tests */
  use: {
    screenshot: 'only-on-failure',
    viewport: { width: 1280, height: 720 },
    headless: false,
    trace: 'on-first-retry',

    launchOptions: {
      slowMo: 2000
    },

    video: 'on',
  },

  projects: [

    // Authentication setup
    {
      name: 'setup',
      testMatch: /auth\.setupflip\.spec\.js/,
    },

    // Main browser tests
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

  ],
});
