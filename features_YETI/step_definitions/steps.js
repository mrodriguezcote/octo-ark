var homePage = require('./page_objects/home.page');
var registrationPage = require('./page_objects/registration.page');
var header = require('./page_objects/header.page');
var footer = require('./page_objects/footer.page');


module.exports = function () {

    this.Given(/^I am on the homepage$/, {timeout: 20 * 1000}, function(done) {
        homePage.open()
        browser
          .waitForVisible(homePage.popup, 10000)
          .refresh()
          .call(done);
    });

    this.Given(/^I can reach the Registration page through the footer$/, {timeout: 20 * 1000}, function(done) {
        footer.clickFooterRegister()
        browser
          .waitForVisible(registrationPage.header, 10000)
          .call(done);
    });

    this.Given(/^I make a product selection$/, {timeout: 20 * 1000}, function(done) {
        registrationPage.selectProduct()
        browser
          .waitForVisible(registrationPage.selectedProduct, 10000)
          .call(done);
    });


    this.Given(/^I input a valid registration number$/, {timeout: 20 * 1000}, function(done) {
        registrationPage.inputSerialNumber()
        browser.call(done);
    });

    this.Given(/^I fill in my shipping information$/, {timeout: 20 * 1000}, function(done) {
        registrationPage.fillShippingInfo()
        browser
          .waitForValue(registrationPage.zipField, 5000)
          .call(done);
    });

    this.Given(/^I click the Register button$/, {timeout: 20 * 1000}, function(done) {
        registrationPage.clickRegister()
        browser
          .waitForVisible(homePage.popup, 10000)
          .call(done);
    });


};
