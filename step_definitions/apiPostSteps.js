const { Given, Then } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');

const ApiPostPage = require('../page-object/apiPostPage');
const common = require('../CommonMethods/apiCommonMethods');
let apiContext;
let apiPage;
let response;
let requestBody;

Given('User sends POST request', async function () {
apiContext = await request.newContext();
apiPage = new ApiPostPage(apiContext);
const result = await apiPage.createPost();
response = result.response;
requestBody = result.requestBody;
});
Then('Verify POST API response', async function () {
common.verifyStatusCode(
response.status(),
201
);
common.verifyTextContains(
requestBody.body,
"Testing Headers"
);
common.verifyTextContains(
requestBody.title,
"Sample"
);
common.verifyEquals(
requestBody.userId,
100
);
await common.printResponse(response);
});