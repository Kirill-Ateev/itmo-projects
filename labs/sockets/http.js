require('http')
.get('http://kodaktor.ru/j/users', (res, b = '') => res
.on('data', d => b += d.toString())
.on('end', () => console.log(JSON.parse(b)))
);