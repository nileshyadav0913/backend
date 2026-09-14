//create your own server using http 
import http from "http";
 const server=http.createServer((req,res)=>{
    res.writeHead(200,{" content-type:text/html"});
    res.write("helloworld");
    res.end();
 })
 server.listen(3000,()=>{ console.log("server is running on port 3000");

 });             






 const http = require('http');

const server = http.createServer((req, res) => {
  // Set status code
  res.statusCode = 200;

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');

  // Send response
  res.end('Hello World');
});

  res.statusCode = 200;

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');

  // Send response
  res.end('Hello World');
});
 