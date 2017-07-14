var homePage = require('./page_objects/home.page');
var productPage = require('./page_objects/product.page');
var categoryPage = require('./page_objects/category.page');
var accountPage = require('./page_objects/account.page');
var miniCart = require('./page_objects/minicart.page');
var header = require('./page_objects/header.page');
var cart = require('./page_objects/cart.page');
var checkout = require('./page_objects/checkout.page');


module.exports = function () {

    this.Given(/^I am on the homepage$/, {timeout: 20 * 1000}, function(done) {
        homePage.open()
        browser
          .waitForVisible(homePage.popup, 10000)
          .refresh()
          .call(done);
    });

    this.Given(/^I request the product page$/, function(done) {
        productPage.open1508()
        browser
          .waitForVisible(productPage.productTitle, 5000)
          .call(done);
    });

    this.Given(/^I request a category page$/, {timeout: 10 * 1000}, function(done) {
        categoryPage.openMen()
        browser
          .waitForVisible(categoryPage.categoryTitle, 5000)
          .call(done);
    });

    this.Given(/^I request a search results page$/, {timeout: 10 * 1000}, function(done) {
        categoryPage.openSearchShorts()
        browser
          .waitForVisible(categoryPage.pageTitle, 5000)
          .call(done);
    });

    this.Given(/^I click on a product grid item$/, function(done) {
        categoryPage.clickGridItem()
        browser.call(done);
    });

    this.Given(/^I click on a product link from the New Arrivals carousel$/, function(done) {
        homePage.clickNewArival()
        browser.call(done);
    });

    this.Given(/^I click on a product link on the related products casousel$/, function(done) {
        productPage.clickRelated()
        browser.call(done);
    });

    this.Given(/^I engage quickview$/, function(done) {
        categoryPage.clickQuickview()
        browser
          .waitForVisible(categoryPage.quickviewRelated, 5000)
          .call(done);
    });

    this.Then(/^I should reach the product page with visible ATC$/, {timeout: 10 * 1000}, function(done) {
        browser
          .waitForVisible(productPage.addToCart, 5000)
          .getText(productPage.addToCart).then(function(text) {
            expect(text).to.equal('ADD TO BAG');
          })
          .call(done);
    });

};
