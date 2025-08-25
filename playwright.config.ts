import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'https://brave-pebble-0a0b5420f.1.azurestaticapps.net',
    trace: 'on-first-retry',
    ...devices['Desktop Chrome'],
  },
});
