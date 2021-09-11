const { createReadStream, createWriteStream, write } = require("fs");
const { Transform } = require("stream");

function transform(c, enc, cb) {
  this.push(String((c = Number(c) + 1)));
  cb();
}

const plusOne = new Transform({ transform });
const writerStream = createWriteStream(`./exercises/streams/2.txt`);

createReadStream(`./exercises/streams/1.txt`, { highWaterMark: 1 })
  .pipe(plusOne)
  .pipe(writerStream);


