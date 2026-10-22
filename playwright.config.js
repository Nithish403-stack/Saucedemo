const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on', // Always take screenshots
    video: 'retain-on-failure', // Only keep videos for failed tests
    trace: 'on', // Always collect traces
    launchOptions: {
      slowMo: 0
    },
    // Custom output directories for artifacts
    screenshotDir: 'reports/playwright/screenshots',
    videoDir: 'reports/playwright/videos',
    traceDir: 'reports/playwright/traces',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    //{
      //name: 'Firefox',
      //use: { ...devices['Desktop Firefox'] },
    //},
    //{
      //name: 'Webkit',
      //use: { ...devices['Desktop Safari'] },
    //},
  ],
  outputDir: 'reports/playwright',
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['json', { outputFile: 'reports/playwright/playwright-report.json' }],
  ],
  // Clean up videos for passed tests
  retries: 1,
  workers: 1,
  preserveOutput: 'failures-only',
};

module.exports = config;