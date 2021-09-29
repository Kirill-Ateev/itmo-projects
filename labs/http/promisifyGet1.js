const http = require("http");
const promisify = require("util");

const prGet = promisify.promisify(http.get);

const data = prGet("http://kodaktor.ru");

data
  .then(y => console.log(y))
  .catch(async x => {
    let result = "";
    for await (const d of x) result += d.toString();
    console.log(result);
  });
