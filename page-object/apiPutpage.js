const config = require('../config');

class ApiPutPage {
constructor(request) {
this.request = request;
this.response = null;
}
async updatePut() {
const putData = {
title: "Nithish",
body: "Testing Headers",
userId: 100
};
this.response = await this.request.put(
`${config.putUrl}`,
{
headers: {
"Content-Type": "application/json",
"x-test-id": "12345"
},
data: putData
}
);
 
return {
response: this.response,
requestBody: putData
};
}
 
async getResponseBody() {
return await this.response.json();
}
 
async getStatusCode() {
return this.response.status();
}
}
 
module.exports = ApiPutPage;