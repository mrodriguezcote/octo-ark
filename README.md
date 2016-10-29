# octo-ark
Acceptance testing with cucumber and selenium 

## Usage

Set docker environment to node-q

`eval $(docker-machine env node-q)`

### run tests on standalone selenium with Chrome

##### 1. Execute the tests

`docker-compose up` Starts the selenium and cucumber containers, results are stored in the cucumber container

##### 2. Retrieve the results

`docker cp cucumber:src/features/results.json src/` Copies results.json out to your host

##### 3. Build mono and run pickles

`docker-compose --file=docker-compose.pckles.yml up` Builds an image with the mono runtime to execute pickles

##### 4. Retrieve the web files

`docker cp pickles:src/web ./src` Puts the pickles site files on your host

### results

On a browser: file://*path-to-octo-ark*/src/web/Index.html

### cleanup

`docker-compose down`

`docker-compose --file=docker-compose.pckles.yml down`

