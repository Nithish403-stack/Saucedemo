# Playwright Cucumber Saucedemo Automation

This project is an automation framework for testing the [SauceDemo](https://www.saucedemo.com/) website using Playwright and Cucumber.

## Project Structure

- **CommonMethods/**: Contains reusable methods for tests.
- **dependencies/**: Contains Cucumber hooks and world configuration.
- **features/**: Contains feature files written in Gherkin syntax.
- **node_modules/**: Contains project dependencies.
- **page-object/**: Contains page object models for the application.
- **reports/**: Contains test reports (JSON, HTML, screenshots, videos, traces).
- **resources/**: Contains test data files for different environments.
- **scripts/**: Contains utility scripts like report generation.
- **step_definitions/**: Contains step definitions for the feature files.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Update the `resources/` folder with appropriate test data.

## Running Tests

- Run all tests: `npm test`
- Generate HTML report: `npm run report`

## Configuration

- Update `playwright.config.js` for Playwright settings.
- Update `cucumber.js` for Cucumber settings.

## Dependencies

- Playwright
- Cucumber.js
- Cucumber HTML Reporter

## License

This project is licensed under the MIT License.