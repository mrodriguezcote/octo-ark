FROM node:4-onbuild

RUN echo "updating npm ...." && \
  curl -L https://npmjs.org/install.sh | sh

COPY /src /src
WORKDIR /src
RUN npm install

ENV \
CMD ["./node_modules/.bin/cucumber.js --format <json[:/src/]>"]
