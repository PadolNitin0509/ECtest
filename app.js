var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! This node js file on git');
});

var server = app.listen(8080);
console.log(" server is running at port 8080");
