//Step definitions
var hipchat = require('hipchat-notifier').make('QA Cucumber-Docker','JARUTFwhp2LVWzTGp4pViINSGtWWgn3CLtTatKjk');

module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function() {
  	hipchat.info('Step 1 Executed');
    return true;
  });

  this.When(/^I click on "([^"]*)"$/, function (text) {
  	hipchat.info('Step 2 Executed');
    return true;
  });

  this.Then(/^I should see "([^"]*)"$/, function (text) {
  	hipchat.info('Step 3 Executed');
    return true;
  });
};