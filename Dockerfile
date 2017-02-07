FROM node:latest

COPY . /tmp
WORKDIR /tmp
RUN npm install

CMD npm start ; npm stop
