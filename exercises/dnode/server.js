const dnode = require('dnode')
//Установка)) sudo npm i weak --python=python2.7
const server = dnode({
    //Перечисление методов для удаленного вызова (RPC)
    mul(n,m,cb) {
        cb(n*m)
    }
})

server.listen(5555)