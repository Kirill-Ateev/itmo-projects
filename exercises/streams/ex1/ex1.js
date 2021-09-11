const { createReadStream, writeFile } = require("fs");

const rdStr = createReadStream(`./exercises/streams/ex1/1.txt`, { highWaterMark: 1 });
let buf = "";
rdStr.on("data", d => (buf = buf + (Number(d) + 1)));

rdStr.on("end", () =>
  writeFile(`./exercises/streams/ex1/1.txt`, String(buf), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  }),
);
