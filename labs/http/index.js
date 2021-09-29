const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.write("a".repeat(10)) &&
    res.write("b".repeat(11)) &&
    res.write("c".repeat("c".repeat(12))) &&
    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
