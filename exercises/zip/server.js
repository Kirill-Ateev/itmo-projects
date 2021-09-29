const http = require("http");
const fs = require("fs");
const zlib = require('zlib');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const filename = req.headers.filename;
  console.log("Получены запросы: " + filename);


  req
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(`${filename}.zip`))
    .on("finish", data => {
      console.log('Файл сжат')
      res.end(data)
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
