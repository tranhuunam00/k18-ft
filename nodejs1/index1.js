var http = require('http'); 
const fs = require("fs")

var host = '127.0.0.1'
var port = 3000



const wait = async (delay = 2000) => {
  return new Promise((res) => {
      setTimeout(res, delay)
  })
}


var server = http.createServer(async (request, response) => {
  console.time("t1")
  await wait(2000)
  response.writeHead(200, {"Content-Type": "text/plain"});
  console.log("server Working");
  console.log("end");
  console.timeEnd("t1")
  response.end('Server Working Success');
});

server.listen(port,host, (error) => {
  if (error) {
    return console.log('Error occured : ', error );
  }

  console.log('server is listening on ' + host + ':'+ port);
});
