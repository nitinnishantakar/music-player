const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
// const a = fs.readFileSync("/tirtytwo.html", "utf-8")

const server = http.createServer((req, res) => {
  const b = req.url
  var a = fs.readFileSync("thirtytwo.html", "utf-8")
  res.writeHead(202, {"content-type": "text/html"})
  res.write(a)
  res.end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

