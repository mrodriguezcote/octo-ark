var express = require('express')
var server = express()

server.post('/payload', function (req, res) {
  res.send('Payload received');
  console.log("PAYLOAD RECEIVED");
})

server.listen(8000, function () {
  console.log('Build Test Server listening on port 8000')
})