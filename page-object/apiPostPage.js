const config = require('../config');

class ApiPostPage {
constructor(request) {
this.request = request;
this.response = null;
}
async createPost() {
const postData = {
title: "Sample",
body: "Testing Headers",
userId: 100
};
this.response = await this.request.post(
`${config.postUrl}`,
{
headers: {
"Content-Type": "application/json",
"x-test-id": "12345"
},
data: postData
}
);
 
return {
response: this.response,
requestBody: postData
};
}
 
async getResponseBody() {
return await this.response.json();
}
 
async getStatusCode() {
return this.response.status();
}
}
 
module.exports = ApiPostPage;