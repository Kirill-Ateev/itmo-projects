const {EventEmitter} = require('events');

const e = new EventEmitter();

e.on('hello', () => console.log(2.5))
console.log(1)
e.emit('hello')
console.log(2)
