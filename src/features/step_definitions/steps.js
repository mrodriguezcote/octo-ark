var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox',
        host: '172.16.0.6',
        port: 32780
    }
};


module.exports = function () {
  this.Given(/^I am on the Cucumber.js GitHub repository$/, function() {
    webdriverio
        .remote(options)
        .init()
        .url('http://www.google.com')
        .getTitle().then(function(title) {
            console.log('Title was: ' + title);
        })
        .end();
  });

  this.When(/^I click on "([^"]*)"$/, function (text) {
    return true;
  });

  this.Then(/^I should see "([^"]*)"$/, function (text) {
    return true;
  });
};