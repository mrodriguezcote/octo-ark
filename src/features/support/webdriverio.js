"use strict";

let WebDriverIO = require('webdriverio');
let browser = WebDriverIO.remote({
  baseUrl: 'https://google.com',
  //For local selenium:
  //host: 'localhost',
  //For dockerized selenium on node-q:
  host: '172.17.0.2',
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