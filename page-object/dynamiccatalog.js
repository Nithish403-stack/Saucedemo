const common = require('../CommonMethods/testcommonmethods');

class DynamicPage {
  constructor(page) {
    this.page = page;
    this.menu = '#react-burger-menu-btn';
    this.dynamiccatalog = '#dynamic_catalog_sidebar_link';
    this.lazy = '#dynamic_catalog_lazy_load_link';
    this.spinner = '#dynamic_catalog_spinner_link';
    this.slider = '#dynamic_catalog_slider_link';
  }


  async dynamic() {
    await common.waitForElementVisible(this.page, this.menu);
    await this.page.click(this.menu);
     await common.waitForElementVisible(this.page, this.dynamiccatalog);
    await this.page.click(this.dynamiccatalog);
    await common.waitForElementVisible(this.page, this.lazy);
    await this.page.click(this.lazy);
  }

  async dynamicspinner() {
    await common.waitForElementVisible(this.page, this.menu);
    await this.page.click(this.menu);
     await common.waitForElementVisible(this.page, this.dynamiccatalog);
    await this.page.click(this.dynamiccatalog);
    await common.waitForElementVisible(this.page, this.spinner);
    await this.page.click(this.spinner);
  }

   async dynamicslider() {
    await common.waitForElementVisible(this.page, this.menu);
    await this.page.click(this.menu);
     await common.waitForElementVisible(this.page, this.dynamiccatalog);
    await this.page.click(this.dynamiccatalog);
    await common.waitForElementVisible(this.page, this.slider);
    await this.page.click(this.slider);
  }
}

module.exports = DynamicPage;