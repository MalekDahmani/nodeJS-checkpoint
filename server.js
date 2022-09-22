
var http = require('http');

http.createServer((request, response) => {
  if (request.url === "/") {
    response.write('<h1>Hello Node!!!!</h1>\n');
    response.end();
  } 
}).listen(3000, (err) => {
    if (err) console.log(err);
    console.log('Server running at http//:127.0.0.1:3000');
  });

