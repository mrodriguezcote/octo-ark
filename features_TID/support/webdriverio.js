"use strict";

let WebDriverIO = require('webdriverio');
let browser = WebDriverIO.remote({
  baseUrl: 'http://staging.southerntide.com',
  //host: 'selenium',
  host: 'localhost',
  port: 4444,
  waitforTimeout: 120 * 1000,
  logLevel: 'silent',
  desiredCapabilities: {
    browserName: 'chrome',
  },
});

global.browser = browser;

module.exports = function() {
  this.Before(function (scenario, done) {
    browser.init().call(done);
  });

  this.After(function (scenario, done) {
    browser.end().call(done);
  });
};