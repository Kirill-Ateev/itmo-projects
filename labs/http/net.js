net.connect(8000, 'localhost').on('data', x => console.log(String(x))).end('GET / HTTP/1.1\nHost:localhost');
