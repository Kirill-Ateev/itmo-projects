const { createReadStream, createWriteStream, write } = require('fs');
const { Transform } = require('stream');

function transform(c, enc, cb) {
  this.push(String((c = Number(c) + 1)));
  cb();
}

// let buffer = new ArrayBuffer(7);
// let view = new DataView(buffer);

const plusOne = new Transform({ transform });
const writerStream = createWriteStream(`./exercises/streams/1.txt`);

createReadStream(`./exercises/streams/1.txt`, { highWaterMark: 1 })
  .pipe(plusOne)
  .on('finish', (chunk) => console.log(chunk))
  .pipe(writerStream)

// rdStr.on('data', d => (buf += d));
// rdStr.on('end', () => rdStr.write('343'));

// createReadStream('./1.txt')
//   .pipe(plusOne)
//   .pipe(process.stdout);
