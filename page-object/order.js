const common = require('../CommonMethods/testcommonmethods');

class OrderPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = '.btn_inventory';
    this.cartButton = '.shopping_cart_link';
    this.checkoutButton = '#checkout';
    this.firstNameField = '#first-name';
    this.lastNameField = '#last-name';
    this.postalCodeField = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.completeHeader = '.complete-header';
  }

  async addItemsAndCheckout() {
    await this.page.click(this.addToCartButton);
    await this.page.click(this.cartButton);
    await this.page.click(this.checkoutButton);
  }

  async provideCheckoutInfo(first, last, postal) {
    await this.page.fill(this.firstNameField, first);
    await this.page.fill(this.lastNameField, last);
    await this.page.fill(this.postalCodeField, postal);
    await this.page.click(this.continueButton);
  }

  async reviewAndFinish() {
    await this.page.click(this.finishButton);
  }

  async isOnCompletePage() {
    return await common.isFieldVisible(this.page, this.completeHeader);
  }
}

module.exports = OrderPage;