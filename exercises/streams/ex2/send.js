const fs = require("fs");
const http = require("http");
const input = process.argv[2];
const path = require('path');

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
  console.log("Ответ сервера:");
  console.log(res)

//   res.on("data", d => {
//     process.stdout.write(d);
//   });
});

// req.on("error", error => {
//   console.error(error);
// });

// req.end();

fs.createReadStream(input)
  .pipe(req)
  .on("finish", () => {
    console.log("Послано");
  });
