const net = require("net");

let client = new net.Socket();
client.connect(8000, "localhost", () =>
  client.write(`GET / HTTP/1.0
Host: localhost

`),
);
let b = '';

client.on("data", function (data) {
    console.log(data.toString());
});

client.on("end", function () {
  console.log(b);
});
