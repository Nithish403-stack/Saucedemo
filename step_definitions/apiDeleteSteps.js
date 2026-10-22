const { Given, Then } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');
 
const ApiDeletePage = require('../page-object/apiDeletePage');
const common = require('../CommonMethods/apiCommonMethods');

let apiContext;
let apiPage;
let response;

Given('User sends DELETE request', async function () {
apiContext = await request.newContext();
apiPage = new ApiDeletePage(apiContext);
const result = await apiPage.deleteApi();
response = result.response;
});

Then('Verify DELETE API response', async function () {
common.verifyStatusCode(
response.status(),
200
);

await common.printResponse(response);
});