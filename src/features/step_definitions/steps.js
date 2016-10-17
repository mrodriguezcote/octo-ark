

module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function() {
    return true;
  });

  this.When(/^I click on "([^"]*)"$/, function (text) {
    return true;
  });

  this.Then(/^I should see "([^"]*)"$/, function (text) {
    return true;
  });
};