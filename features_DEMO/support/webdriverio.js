"use strict";

let WebDriverIO = require('webdriverio');
let browser = WebDriverIO.remote({
  baseUrl: 'https://github.com/mrodriguezcote',
  host: 'localhost',
  //host: 'selenium',
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