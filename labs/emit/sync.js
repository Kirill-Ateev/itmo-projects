const {EventEmitter} = require('events');

const e = new EventEmitter();

e.on('hello', () => console.log(2.5))
console.log(1)
e.emit('hello')
console.log(2)

// 1 2.5 2 Происходит синхронно! Чтобы было асинхронно 
//можно обернуть console.log в setImmediate или setTimeout чтобы 
//вызов попал в очередь