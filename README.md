# octo-ark
Acceptance testing with cucumber and selenium grid 

## Usage

### Run standalone selenium with Firefox

`docker-compose up`

### Run selenium grid

`docker-compose --file=docker-compose.grid.yml up`

Check [grid status](http://localhost:4444/grid/console)

To scale Firefox up/down `docker-compose scale firefoxnode=[x]`

To scale Chrome up/down `docker-compose scale chromenode=[x]`
