var homePage = require('./page_objects/home.page');
var productPage = require('./page_objects/product.page');
var categoryPage = require('./page_objects/category.page');
var accountPage = require('./page_objects/account.page');
var miniCart = require('./page_objects/minicart.page');
var header = require('./page_objects/header.page');
var cart = require('./page_objects/cart.page');
var checkout = require('./page_objects/checkout.page');


module.exports = function () {

    this.Given(/^I place a product in my cart$/, {timeout: 10 * 1000}, function(done) {
        productPage.open847074574682()
        browser
          .waitForVisible(productPage.productTitle, 5000).then(function() {
            productPage.clickATC()
          })
          .call(done);
    });

    this.Given(/^I request the checkout page$/, {timeout: 10 * 1000}, function(done) {
        checkout.open()
        browser
          .waitForVisible(checkout.pageTitle, 10000)
          .call(done);
    });

    this.Given(/^I proceed as a guest$/, {timeout: 10 * 1000}, function(done) {
        checkout.continueGuest()
        browser.call(done);
    });

    this.Given(/^I fill out billing information$/, {timeout: 10 * 1000}, function(done) {
        checkout.fillBilling()
        browser
          .waitForValue(checkout.zipField, 5000)
          .call(done);
    });

    this.Given(/^I select ship to same address and continue$/, {timeout: 10 * 1000}, function(done) {
        checkout.continueShipSame()
        browser
          .waitForVisible(checkout.shippingMethods, 10000)
          .call(done);
    });

    this.Given(/^I select a shipping method and continue$/, {timeout: 10 * 1000}, function(done) {
        checkout.selectUps03()
        browser
          .waitForVisible(checkout.submitPaymentButton, 10000)
          .call(done);
    });

    this.Given(/^I check the store credit checkbox$/, {timeout: 10 * 1000}, function(done) {
        checkout.selectStoreCredit()
        browser.call(done);
    });

    this.Given(/^no other payment methods are listed$/, {timeout: 10 * 1000}, function(done) {
        browser
          .waitForVisible(checkout.paymentMethods, 10000, true)
          .call(done);
    });

    this.Given(/^I check the gift card and promo code checkbox$/, {timeout: 10 * 1000}, function(done) {
        checkout.selectPromoCheckbox()
        browser
          .waitForVisible(checkout.giftcardForm, 10000)
          .call(done);
    });

    this.Given(/^I submit a valid gift card code$/, {timeout: 10 * 1000}, function(done) {
        checkout.submitGiftcard()
        browser
          .waitForVisible(checkout.giftcardWaitMsg, 10000, true)
          .call(done);
    });

    this.Given(/^I submit a valid gift card code that covers the entire order$/, {timeout: 10 * 1000}, function(done) {
        checkout.submitGiftcardTotal()
        browser
          .waitForVisible(checkout.giftcardWaitMsg, 10000, true)
          .call(done);
    });

    this.Given(/^I submit a valid promo code$/, {timeout: 10 * 1000}, function(done) {
        checkout.submitPromo()
        browser
          .waitForVisible(checkout.promoWaitMsg, 10000, true)
          .call(done);
    });

    this.Given(/^I submit a valid promo code that covers the entire order$/, {timeout: 10 * 1000}, function(done) {
        checkout.submitPromoTotal()
        browser
          .waitForVisible(checkout.promoWaitMsg, 10000, true)
          .call(done);
    });

    this.Given(/^I select credit card as the payment method$/, {timeout: 10 * 1000}, function(done) {
        checkout.selectCardPayment()
        browser
          .waitForVisible(checkout.cvvField, 10000)
          .call(done);
    });

    this.Given(/^I select paypal as the payment method$/, {timeout: 10 * 1000}, function(done) {
        checkout.selectPaypalPayment()
        browser
          .waitForVisible(checkout.paypalCallout, 10000)
          .call(done);
    });

    this.Given(/^I select a test payment method$/, {timeout: 10 * 1000}, function(done) {
        checkout.selectTestPayment()
        browser
          .waitForVisible(checkout.reviewTable, 10000)
          .call(done);
    });

    this.Given(/^I submit a valid credit card$/, {timeout: 10 * 1000}, function(done) {
        checkout.submitMasterCard()
        browser
          .waitForVisible(checkout.reviewTable, 10000)
          .call(done);
    });

    this.Given(/^I continue to Order Review$/, {timeout: 10 * 1000}, function(done) {
        checkout.paymentContinue()
        browser
          .waitForVisible(checkout.reviewTable, 10000)
          .call(done);
    });

    this.Given(/^I can continue to Paypal page$/, {timeout: 30 * 1000}, function(done) {
        checkout.paymentContinue()
        browser
          .waitForVisible(checkout.paypalButton, 30000)
          .call(done);
    });

    this.Then(/^I can place my order and see the confirmation page$/, {timeout: 10 * 1000}, function(done) {
        checkout.clickPlaceOrder()
        browser
          .waitForVisible(checkout.storyBox, 10000)
          .call(done);
    });

};
