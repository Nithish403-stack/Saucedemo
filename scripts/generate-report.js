const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber/json/cucumber-report.json',
  output: './reports/cucumber/html/index.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chromium",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);