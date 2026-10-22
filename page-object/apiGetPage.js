const config = require('../config');

class ApiGetPage {
constructor(request) {
this.request = request;
this.response = null;
}
async Getapi() {
this.response = await this.request.get(
`${config.getUrl}`);

return {
response: this.response,
};
}
async getResponseBody() {
return await this.response.json();
}
 
async getStatusCode() {
return this.response.status();
}
}
 
module.exports = ApiGetPage;