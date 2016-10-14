FROM debian:jessie

RUN apt-get update && apt-get install -y \
  libasound2 \
  libgconf-2-4 \
  libgtk2.0-0 \
  libnss3 \
  libxss1 \
  libxtst6 \
  curl \
  xvfb \
  && rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get update && apt-get install -y \
  nodejs \
  && rm -rf /var/lib/apt/lists/* && \
  echo "updating npm ...." && \
  curl -L https://npmjs.org/install.sh | sh

# copy in application
COPY /src /octo-ark
WORKDIR /octo-ark
RUN npm install

# set container runtime
ENV \
  DEBUG="nightmare"

COPY /docker-entrypoint.sh /entrypoint
ENTRYPOINT ["/entrypoint"]
CMD ["suite:yahoo-search-example.js"]