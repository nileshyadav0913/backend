const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  
  res.end('my name is nilesh yadav');
});

const PORT = 1000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});