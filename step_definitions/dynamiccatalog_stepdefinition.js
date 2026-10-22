const { When, Then } = require('@cucumber/cucumber');
const DynamicPage = require('../page-object/dynamiccatalog');
const LoginPage = require('../page-object/login');
const common = require('../CommonMethods/testcommonmethods');
const testCtx = require('../dependencies/hooks');

let dynamicPage;
let loginPage;

When('User click lazy Dynamic Catalog', async () => {
  dynamicPage = new DynamicPage(testCtx.page);
  await dynamicPage.dynamic();
});

Then('Verify user should be navigated to the dynamic catalog', async () => {
  const url = await common.getCurrentUrl(testCtx.page);
  common.verifyTextEquals('https://www.saucedemo.com/dynamic-catalog-lazy-load.html', url);
});

When('User click Spinner Catalog', async () => {
  dynamicPage = new DynamicPage(testCtx.page);
  await dynamicPage.dynamicspinner();
});

Then('Verify user should be navigated to the spinner', async () => {
  const url = await common.getCurrentUrl(testCtx.page);
  common.verifyTextEquals('https://www.saucedemo.com/dynamic-catalog-spinner.html', url);
});

When('User click Slider Catalog', async () => {
  dynamicPage = new DynamicPage(testCtx.page);
  await dynamicPage.dynamicslider();
});

Then('Verify user should be navigated to the slider', async () => {
  const url = await common.getCurrentUrl(testCtx.page);
  common.verifyTextEquals('https://www.saucedemo.com/dynamic-catalog-slider.html', url);
});

// ...existing code...