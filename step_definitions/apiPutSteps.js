const { Given, Then } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');

const ApiPutPage = require('../page-object/apiPutPage');
const common = require('../CommonMethods/apiCommonMethods');
let apiContext;
let apiPage;
let response;
let requestBody;

Given('User sends PUT request', async function () {
apiContext = await request.newContext();
apiPage = new ApiPutPage(apiContext);
const result = await apiPage.updatePut();
response = result.response;
requestBody = result.requestBody;
});
Then('Verify PUT API response', async function () {
common.verifyStatusCode(
response.status(),
200
);
common.verifyTextContains(
requestBody.body,
"Testing Headers"
);
common.verifyTextContains(
requestBody.title,
"Nithish"
);
common.verifyEquals(
requestBody.userId,
100
);
await common.printResponse(response);
});