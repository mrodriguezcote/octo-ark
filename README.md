# octo-ark
Acceptance testing with cucumber and selenium 

## Usage

### run tests on standalone selenium with Chrome

##### 1. Execute the tests

`docker-compose up` 

Starts the selenium, cucumber, and pickles containers; pickles waits until results are written to generate the website files

##### 2. Retrieve the web files

`docker cp pickles:src/web ./src` Puts the pickles site files on your host


### results

On a browser: file://*path-to-octo-ark*/src/web/Index.html

### cleanup

`docker-compose down`

`docker-compose --file=docker-compose.pickles.yml down`


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

