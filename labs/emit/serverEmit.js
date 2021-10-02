let s = http.Server(() => console.log(123));

s.emit('request')
//123
//Потому что сервер это экземпляр класса EventEmitter 