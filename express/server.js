var express = require('express')
var server = express()
var cmd = require('node-cmd')

server.post('/payload', function (req, res) {
  res.send('Payload received');
  cmd.get(
      `
          cd ../
          docker-compose up
          docker cp pickles:src/web ./src
      `
  );
})

server.get('/results', function (req, res) {
  cmd.get(
      `
          docker logs cucumber
      `,
      function(data) {
      		res.send(data);
      }
  );
})

server.get('/teardown', function (req, res) {
  res.send('Stopping and removing containers');
  cmd.get(
      `
          docker-compose down
      `
  );
})

server.listen(8000, function () {
  console.log('Build Test Server listening on port 8000')
})