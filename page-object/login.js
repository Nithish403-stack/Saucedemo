const common = require('../CommonMethods/testcommonmethods');
const config = require('../config');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';
    this.menuButton = '#react-burger-menu-btn';
    this.aboutButton = '#about_sidebar_link';
    this.logoutButton = '#logout_sidebar_link';
    this.errorMessage = '[data-test="error"]';
    this.productsort = '.product_sort_container'
  }

  async navigate() {
    await common.navigateTo(config.baseUrl, this.page);
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async clickabout() {
     await common.waitForElementVisible(this.page, this.menuButton);
    await this.page.click(this.menuButton);
    await common.waitForElementVisible(this.page, this.aboutButton);
    await this.page.click(this.aboutButton);
  }

  async logout() {
    await common.waitForElementVisible(this.page, this.menuButton);
    await this.page.click(this.menuButton);
    await common.waitForElementVisible(this.page, this.logoutButton);
    await this.page.click(this.logoutButton);
  }
  
  async Back() {
    await this.page.goBack();
  }

  async sortproductZtoA() {
    await common.waitForElementVisible(this.page, this.productsort);
    await this.page.locator(this.productsort).selectOption('za');
  }

  async sortproductlowtohigh() {
    await common.waitForElementVisible(this.page, this.productsort);
    await this.page.locator(this.productsort).selectOption('lohi');
  }

  async sortproducthightolow() {
    await common.waitForElementVisible(this.page, this.productsort);
    await this.page.locator(this.productsort).selectOption('hilo');
  }

  async isOnLoginPage() {
    return await common.getCurrentUrl(this.page) === 'https://www.saucedemo.com/';
  }

  async isOnHomePage() {
    return await common.getCurrentUrl(this.page) === 'https://www.saucedemo.com/inventory.html';
  }

  async about() {
    return await common.getCurrentUrl(this.page) === 'https://saucelabs.com/';
  }

  async getErrorMessage() {
    await common.waitForElementVisible(this.page, this.errorMessage);
    return await common.getText(this.page, this.errorMessage);
  }
}

module.exports = LoginPage;