# octo-ark
Acceptance testing with cucumber and selenium 

## Usage

Set docker environment to node-q

`eval $(docker-machine env node-q)`

### run standalone selenium with Chrome

`docker-compose up`

### run selenium grid

`docker-compose --file=docker-compose.grid.yml up`

Check [grid status](http://172.16.0.6:4444/grid/console)

To scale Firefox up/down `docker-compose scale firefoxnode=[x]`

To scale Chrome up/down `docker-compose scale chromenode=[x]`
