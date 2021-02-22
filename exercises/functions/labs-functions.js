//FUNC-001
const func001 = (r=255, g=255, b=255) => `rgb(${r},${g},${b})`;
console.log(func001(5,3), ` Должно быть rgb(5,3,255)`) // rgb(5,3,255)

//FUNC-002
const mixin = function(){ 
    return this * this; 
   };

   mixin.call(5)

//FUNC-003 (???)
let qv = require('./func_003_export.js')
console.log(qv.bind(this)(5))

//FUNC-004

//FUNC-005
const partiPow = x => y => !!y ? x ** y : x**x;
partiPow(5)()

//FUNC-007
https://kodaktor.ru/?!=_func_6a33a

