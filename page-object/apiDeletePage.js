const config = require('../config');

class ApiDeletePage {
constructor(request) {
this.request = request;
this.response = null;
}

async deleteApi() {
    
this.response = await this.request.delete(
`${config.deleteUrl}`
);
return {
response: this.response
};
}
async getStatusCode() {
return this.response.status();
}

async getResponseBody() {
return await this.response.text();
}
}

module.exports = ApiDeletePage;