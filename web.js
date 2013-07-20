var express = require('express');

var app = express.createServer(express.logger());

var ifs = "index.html";

var buf = new Buffer(fs.readFileSync(fs));

app.get('/', function(request, response) {
  response.send(buf.toString(buf));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
