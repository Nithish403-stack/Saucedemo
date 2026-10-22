const { setWorldConstructor } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
    this.testData = null;
  }

  loadTestData(env = 'dev') {
    const filePath = path.resolve(__dirname, `../resources/testdata.${env}.json`);
    if (fs.existsSync(filePath)) {
      this.testData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } else {
      throw new Error(`Test data file not found: ${filePath}`);
    }
  }
}

setWorldConstructor(CustomWorld);