# octo-ark
Acceptance testing with cucumber and selenium 

## Usage

### run tests on standalone selenium with Chrome

##### 1. Execute the tests

`docker-compose up` Starts selenium, cucumber, pickles, and nginx containers

##### 2. See Results

On your browser: [http://localhost:9000/](http://localhost:9000/)

### cleanup

`docker-compose down`



## Development

When developing, [local selenium](https://github.com/vvo/selenium-standalone) makes it easier to debug your own tests. To run tests locally, change the host entry in the *webdriverio.js* configuration object:

```javascript
let browser = WebDriverIO.remote({
  baseUrl: 'https://google.com',
  host: 'localhost', //Change this from 'selenium-chrome' to 'localhost'
  port: 4444,
  waitforTimeout: 120 * 1000,
  logLevel: 'silent',
  desiredCapabilities: {
    browserName: 'chrome',
  },
});
```
`npm install` from src/ and you can make use of the full [cucumber.js CLI](https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md)

