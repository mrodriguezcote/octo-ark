var homePage = require('./page_objects/home.page');
var productPage = require('./page_objects/product.page');
var categoryPage = require('./page_objects/category.page');
var accountPage = require('./page_objects/account.page');
var miniCart = require('./page_objects/minicart.page');
var header = require('./page_objects/header.page');
var cart = require('./page_objects/cart.page');
var checkout = require('./page_objects/checkout.page');


module.exports = function () {

    this.Given(/^I select color and size and click the ATC button$/, {timeout: 10 * 1000}, function(done) {
        productPage.selectColorSizeAdd()
        browser.call(done);
    });

    this.Given(/^I request the login page$/, {timeout: 10 * 1000}, function(done) {
        accountPage.openLogin()
        browser
          .waitForVisible(accountPage.loginTitle, 10000)
          .call(done);
    });

    this.Given(/^I use my credentials to log in$/, {timeout: 10 * 1000}, function(done) {
        accountPage.submitLogin()
        browser
          .waitForVisible(accountPage.accountTitle, 10000)
          .call(done);
    });

    this.Given(/^I go to my wishlist and click ATC$/, {timeout: 10 * 1000}, function(done) {
        accountPage.clickWishlist()
        browser
          .waitForVisible(accountPage.wishlistTitle, 10000).then(function() {
            accountPage.clickWishlistATC()
          })
          .call(done);
    });

    this.Given(/^The product is removed from wishlist$/, {timeout: 10 * 1000}, function(done) {
        browser
          .waitForVisible(accountPage.wishlistSuccess, 10000)
          .call(done);
    });

    this.Given(/^I go to a previous order and click Reorder$/, {timeout: 10 * 1000}, function(done) {
        accountPage.clickOrders()
        browser
          .waitForVisible(accountPage.accountTitle, 10000).then(function() {
            accountPage.clickOrdersReorder()
          })
          .call(done);
    });

    this.Then(/^The product should display in mini cart$/, {timeout: 10 * 1000}, function(done) {
        browser
          .waitForVisible(miniCart.productTitle, 10000)
          .call(done);
    });

    this.Then(/^The product should display in cart page$/, {timeout: 10 * 1000}, function(done) {
        browser
          .waitForVisible(cart.productTitle, 10000)
          .call(done);
    });

};
