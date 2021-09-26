export default function appScr(express, bodyParser, fs, crypto, http, CORS) {
  const login = 'itmo307692';
  const headersTextPlain = {
    'Content-Type': 'text/plain; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'X-Author': login,
    ...CORS
  };

  const app = express();
  app.use(bodyParser());

  app.all('/login/', (req, res) => {
    res.set(headersTextPlain);
    res.send(login);
  });

  app.all('/code/', (req, res) => {
    res.set(headersTextPlain);
    fs.readFile(import.meta.url.substring(8), (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  });

  app.all('/sha1/:input/', (req, res) => {
    res.set(headersTextPlain);
    const sha1 = crypto.createHash('sha1');
    res.send(sha1.update(req.params.input).digest('hex'));
  });

  app.all('/req/', (req, res) => {
    let page;
    if (req.method === 'GET') {
      page = req.query.addr;
      http.get(page, (response, b = '') =>
        response
          .on('data', (d) => (b += d.toString()))
          .on('end', () => res.send(b))
      );
    } else {
      page = req.body.addr;
      http.get(page, (response, b = '') =>
        response
          .on('data', (d) => (b += d.toString()))
          .on('end', () => res.send(b))
      );
    }
  });

  app.all('/*', (req, res) => {
    res.set(headersTextPlain);
    res.send(login);
  });

  return app;
}
