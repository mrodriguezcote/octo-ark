# octo-ark
Acceptance testing with cucumber and selenium grid 

### Cucumber

`docker build -t cucumber .`

`docker run -it --rm cucumber`
 

### Selenium grid

`docker-compose up -d`

Check [grid status](http://localhost:4444/grid/console)

To scale Firefox up/down `docker-compose scale firefoxnode=[x]`

To scale Chrome up/down `docker-compose scale chromenode=[x]`
