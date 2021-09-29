const fs = require("fs");
const http = require("http");
const input = process.argv[2];
const path = require('path');

//Я отправляю побитовый стрим на сервер (+нужен txt файл) 

const options = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/",
  method: "POST",
  headers: {
    filename: path.basename(input),
    "Content-Type": "application/octet-stream"
  },
};

const req = http.request(options, res => {
  console.log("Ответ сервера: ", res.statusCode);
});

req.on("error", error => {
  console.error(error);
});


fs.createReadStream(input, { highWaterMark: 1 })
  .pipe(req)
  .on("finish", () => {
    console.log("Послано");
  });
