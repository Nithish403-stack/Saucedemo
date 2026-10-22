const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../page-object/login');
const common = require('../CommonMethods/testcommonmethods');
const testCtx = require('../dependencies/hooks');

let loginPage;

Given('User launch the SauceDemo application', async () => {
  loginPage = new LoginPage(testCtx.page);
  await loginPage.navigate();
});

When('User logs in with valid credentials', async () => {
  await loginPage.login('standard_user', 'secret_sauce');
});

Then('Verify user should be navigated to the home page', async () => {
  const url = await common.getCurrentUrl(testCtx.page);
  common.verifyTextEquals('https://www.saucedemo.com/inventory.html', url);
});

When('User click about', async () => {
  await loginPage.clickabout();
});

Then('Verify user should be navigated to the about page', async () => {
  const url = await common.getCurrentUrl(testCtx.page);
  common.verifyTextContains('saucelabs.com', url);
});

When('Back to Products page', async () => {
  await loginPage.Back();
});

Then('Verify user should be navigated back to the product page', async () => {
  const url = await common.getCurrentUrl(testCtx.page);
  common.verifyTextEquals('https://www.saucedemo.com/inventory.html', url);
});

When('Sort Product Name Z to A', async() => {
  await loginPage.sortproductZtoA()
})

When('Sort Product Low to High', async() => {
  await loginPage.sortproductlowtohigh()
})

When('Sort Product High to Low', async() => {
  await loginPage.sortproducthightolow()
})

When('User attempts login with Invalid credentials', async () => {
  await loginPage.login('invalid_user', 'invalid_pass');
});

Then('User should verify an error message', async () => {
  const errorMsg = await loginPage.getErrorMessage();
  common.verifyTextContains('Username and password do not match', errorMsg);
});

When('User logs out from the application', async () => {
  await loginPage.logout();
});

Then('Verify the user should land on the login page', async () => {
  const url = await common.getCurrentUrl(testCtx.page);
  common.verifyTextEquals('https://www.saucedemo.com/', url);
});