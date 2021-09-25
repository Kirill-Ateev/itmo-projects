const net = require("net");

let client = new net.Socket();
client.connect(80, "kodaktor.ru", () =>
  client.write(`GET /j/users HTTP/1.0
Host: kodaktor.ru

`),
);
let b = '';

client.on("data", function (data) {
    b += data.toString()
});

client.on("end", function () {
  console.log(JSON.parse(b.split('\r\n')[b.split('\r\n').length-1]));
});
