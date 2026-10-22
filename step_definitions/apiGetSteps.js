const { Given, Then } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');

const ApiGetPage = require('../page-object/apiGetPage');
const common = require('../CommonMethods/apiCommonMethods');
let apiContext;
let apiPage;
let response;
let responseBody;

Given('User sends GET request', async function () {
apiContext = await request.newContext();
apiPage = new ApiGetPage(apiContext);
const result = await apiPage.Getapi();
response = result.response;
responseBody = await apiPage.getResponseBody();
});
Then('Verify GET API response', async function () {
common.verifyStatusCode(response.status(),200);
common.verifyEquals(responseBody.userId,1);
common.verifyEquals(responseBody.id,1);
common.verifyTextContains(responseBody.title,"delectus aut autem");
await common.printResponse(response);
});