const { Before, After, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');

// Shared context object
const testCtx = {
  browser: null,
  context: null,
  page: null,
};

setDefaultTimeout(30 * 2000); // 60 seconds
fs.mkdirSync('reports/playwright/screenshots', { recursive: true });
fs.mkdirSync('reports/playwright/traces', { recursive: true });
const config = require('../playwright.config');
Before(async () => {
  testCtx.browser = await chromium.launch({ headless: config.use.headless });
  testCtx.context = await testCtx.browser.newContext();
  testCtx.page = await testCtx.context.newPage();
  await testCtx.page.context().tracing.start({
    screenshots: true,
    snapshots: true,
  });
});

AfterStep(async ({ result, pickle }) => {
try {
if (result.status === 'FAILED' && testCtx.page) {
const screenshot = await testCtx.page.screenshot();
const fileName =
`reports/playwright/screenshots/${Date.now()}_${pickle.name.replace(/\s+/g, '_')}.png`;
fs.writeFileSync(fileName, screenshot);
}
} catch (error) {
console.log('Screenshot capture failed:', error.message);
}
});

After(async function () {
  if (testCtx.page) {
    const scenarioName = this.pickle ? this.pickle.name.replace(/\s+/g, '_') : 'trace';
    const tracePath = `reports/playwright/traces/${Date.now()}_${scenarioName}.zip`;
    //await testCtx.page.context().tracing.stop({ path: tracePath });
    await testCtx.page.close();
  }
  if (testCtx.context) await testCtx.context.close();
  if (testCtx.browser) await testCtx.browser.close();
});

module.exports = testCtx;