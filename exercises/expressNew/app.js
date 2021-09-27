const login = 'itmo307692';
export const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS,DELETE',
  'Access-Control-Allow-Headers':
    'x-test,Content-Type,Accept,Access-Control-Allow-Headers',
};
export const headersTextPlain = {
  'Content-Type': 'text/plain; charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'X-Author': login,
  ...CORS,
};

export default function appScr(
  express,
  bodyParser,
  cookieParser,
  fs,
  crypto,
  http,
  User,
  UserController
) {
  const app = express();

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  //app.use(bodyParser.json());

  app.all('/login/', (req, res) => {
    res.set(headersTextPlain);
    res.send(login);
  });

  app.all('/code/', (req, res) => {
    res.set(headersTextPlain);
    fs.readFile(import.meta.url.substring(7), (err, data) => {
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

  app.use('/insert/', UserController(express, User));

  app.all('/*', (req, res) => {
    res.set(headersTextPlain);
    res.send(login);
  });

  return app;
}
