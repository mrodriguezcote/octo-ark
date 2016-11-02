# octo-ark
Acceptance testing with cucumber and selenium 

## Usage

### run tests on standalone selenium with Chrome

##### 1. Execute the tests

`docker-compose up` 

Starts the selenium, cucumber, and pickles containers; pickles waits until the cucumber finishes writing results to generate the website files

##### 2. Retrieve the web files

`docker cp pickles:src/web ./src` Puts the pickles site files on your host



### results

On a browser: file://*path-to-octo-ark*/src/web/Index.html

### cleanup

`docker-compose down`

`docker-compose --file=docker-compose.pickles.yml down`

