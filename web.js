var express = require('express');
var fs    = require('fs');
var index   = fs.readFileSync('./index.html', 'utf8');
var buffer  = new Buffer(index,'utf8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8',0,29));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
