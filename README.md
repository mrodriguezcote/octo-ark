# octo-ark
Acceptance testing with cucumber and selenium 

## Usage

### run standalone selenium with Chrome

`docker-compose up`

### run selenium grid

`docker-compose --file=docker-compose.grid.yml up`

Check [grid status](http://localhost:4444/grid/console)

To scale Firefox up/down `docker-compose scale firefoxnode=[x]`

To scale Chrome up/down `docker-compose scale chromenode=[x]`
