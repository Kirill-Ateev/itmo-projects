const http = require("http");
const { Transform } = require("stream");
const fs = require("fs");

//Я принимаю побитовый стрим, трансформирую его и отдаю изменённый файл

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const filename = req.headers.filename;
  console.log("Получены запросы: " + filename);

  function transform(c, enc, cb) {
    this.push(String((c = Number(c) + 1)));
    cb();
  }

  const plusOne = new Transform({ transform });
  const writerStream = fs.createWriteStream(`plus${filename}`);

  req
    .pipe(plusOne)
    .pipe(writerStream)
    .on("finish", data => {
      res.writeHead(201, { "Content-Type": "text/plain" });
      res.end();
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
