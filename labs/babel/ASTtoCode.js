const { default: generate } = require("@babel/generator");
const { get } = require("http");

const URL = "http://kodaktor.ru/j/_ast/23ab6";

get(URL, (r, ast = "") =>
  r
    .on("data", (d) => (ast += d))
    .on("end", () => {
      const { code } = generate(JSON.parse(ast));
      console.log(code);
    })
);
