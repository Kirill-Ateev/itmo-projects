const http = require("http");
const promisify = require("util");

http.get[promisify.promisify.custom] = x =>
  new Promise((res, rej) => {
    http.get(x, res, rej);
  });
const prGet = promisify.promisify(http.get);

(async () => {
  const data = await prGet("http://kodaktor.ru");

  let result = "";
  for await (const d of data) result += d.toString();
  console.log(result);
})();

//По идеи можно и так:
// const data = await prGet("http://kodaktor.ru");
// let result = "";
// for await (const d of data) result += d.toString();
// console.log(result);