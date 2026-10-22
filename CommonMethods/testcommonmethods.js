// Common methods for tests
module.exports = {
  // Text Validation
  verifyTextEquals: (expected, actual) => {
    if (expected !== actual) throw new Error(`Expected '${expected}', got '${actual}'`);
  },
  verifyTextContains: (expectedSubstring, actual) => {
    if (!actual.includes(expectedSubstring)) throw new Error(`'${actual}' does not contain '${expectedSubstring}'`);
  },
  verifyTextNotEquals: (expected, actual) => {
    if (expected === actual) throw new Error(`Expected not to be '${expected}', but got '${actual}'`);
  },

  // Field State Checks
  isFieldEnabled: async (page, locator) => {
    return await page.isEnabled(locator);
  },
  isFieldDisabled: async (page, locator) => {
    return !(await page.isEnabled(locator));
  },
  isFieldPresent: async (page, locator) => {
    return await page.$(locator) !== null;
  },
  isFieldVisible: async (page, locator) => {
    return await page.isVisible(locator);
  },
  isFieldNotVisible: async (page, locator) => {
    return !(await page.isVisible(locator));
  },

  // Dropdown Handling
  selectDropdownByValue: async (page, locator, value) => {
    await page.selectOption(locator, { value });
  },
  selectDropdownByIndex: async (page, locator, index) => {
    const options = await page.$$(locator + ' option');
    if (options[index]) {
      const value = await options[index].getAttribute('value');
      await page.selectOption(locator, { value });
    } else {
      throw new Error('Dropdown index out of range');
    }
  },
  selectDropdownByVisibleText: async (page, locator, text) => {
    const options = await page.$$(locator + ' option');
    for (const option of options) {
      const optionText = await option.textContent();
      if (optionText.trim() === text) {
        const value = await option.getAttribute('value');
        await page.selectOption(locator, { value });
        return;
      }
    }
    throw new Error(`Option with text '${text}' not found`);
  },
  getAllDropdownOptions: async (page, locator) => {
    const options = await page.$$(locator + ' option');
    return Promise.all(options.map(async o => await o.textContent()));
  },

  // List Iteration (example: verify select list contains expected values)
  verifyselectlist: async (page, locator, expectedList) => {
    const options = await page.$$(locator + ' option');
    const actualList = await Promise.all(options.map(async o => (await o.textContent()).trim()));
    for (const expected of expectedList) {
      if (!actualList.includes(expected)) {
        throw new Error(`Expected list to contain '${expected}', but it did not.`);
      }
    }
  },

  // Button Actions
  isButtonEnabled: async (page, locator) => {
    return await page.isEnabled(locator);
  },
  isButtonVisible: async (page, locator) => {
    return await page.isVisible(locator);
  },

  // Input Field Actions
  getText: async (page, locator) => {
    return await page.textContent(locator);
  },

  // Wait Utilities
  waitForElementVisible: async (page, locator, timeout = 5000) => {
    await page.waitForSelector(locator, { state: 'visible', timeout });
  },
  waitForElementClickable: async (page, locator, timeout = 5000) => {
    await page.waitForSelector(locator, { state: 'attached', timeout });
    if (!(await page.isEnabled(locator))) throw new Error('Element not clickable');
  },
  waitForText: async (page, locator, expectedText, timeout = 5000) => {
    await page.waitForFunction(
      (locator, expectedText) => document.querySelector(locator)?.textContent.includes(expectedText),
      locator,
      expectedText,
      { timeout }
    );
  },

  // Assertions
  assertEquals: (expected, actual) => {
    if (expected !== actual) throw new Error(`Assertion failed: expected '${expected}', got '${actual}'`);
  },
  assertTrue: (condition) => {
    if (!condition) throw new Error('Assertion failed: condition is not true');
  },
  assertFalse: (condition) => {
    if (condition) throw new Error('Assertion failed: condition is not false');
  },

  // Page Navigation
  navigateTo: async (url, page) => {
    await page.goto(url);
  },
  getCurrentUrl: async (page) => {
    return page.url();
  },
  refreshPage: async (page) => {
    await page.reload();
  },

  // File Upload & Download
  uploadFile: async (page, locator, filePath) => {
    const input = await page.$(locator);
    await input.setInputFiles(filePath);
  },
  verifyFileDownloaded: async (fileName, downloadPath = './downloads') => {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(downloadPath, fileName);
    if (!fs.existsSync(filePath)) {
      throw new Error(`File '${fileName}' not found in '${downloadPath}'`);
    }
  },

  // Screenshot utility
  takeScreenshot: async (page, fileName) => {
    await page.screenshot({ path: `./reports/playwright/screenshots/${fileName}.png` });
  }
};