const dnode = require('dnode')

const server = dnode({
    //Перечисление методов
    mul(n,m,cb) {
        cb(n*m)
    }
})

server.listen(5555)