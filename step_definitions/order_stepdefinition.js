const { When, Then } = require('@cucumber/cucumber');
const OrderPage = require('../page-object/order');
const LoginPage = require('../page-object/login');
const common = require('../CommonMethods/testcommonmethods');
const testCtx = require('../dependencies/hooks');

let orderPage;
let loginPage;

When('User add items to the cart and proceeds to checkout', async () => {
  orderPage = new OrderPage(testCtx.page);
  await orderPage.addItemsAndCheckout();
});

When('User provides checkout information', async () => {
  await orderPage.provideCheckoutInfo('John', 'Doe', '12345');
});

When('User reviews the order and finishes checkout', async () => {
  await orderPage.reviewAndFinish();
});

Then('Verify user lands on the complete page', async () => {
  const isComplete = await orderPage.isOnCompletePage();
  common.assertTrue(isComplete);
});

// ...existing code...