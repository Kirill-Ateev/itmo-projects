const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers':
    'x-test,Content-Type,Accept,Access-Control-Allow-Headers',
};
const login = 'itmo307692';
const headersTextHtml = {
  'Content-Type': 'text/html; charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'X-Author': login,
};
const headersTextPlain = {
  'Content-Type': 'text/plain; charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
  'X-Author': login,
};
const headersJson = {
  'Content-Type': 'application/json',
};

app.use(express.json());

app.get('/', (req, res) => {
  res.set(headersTextHtml);
  console.log(req);
  res.send(login);
});

app.get('/f', (r) => {
  res.format({
    'text/html': () => r.res.send('<h2>42<h2>'),
    'application/json': () => r.res.send('<h2>Ht42<h2>'),
  });
  res.send(login);
});

app.get('/login/', (req, res) => {
  res.set(headersTextPlain);
  res.send(login);
});

app.get('/sample/', (req, res) => {
  res.set(headersTextPlain);
  res.send('function task(x) { return x*this*this; }');
});

app.get('/promise/', (req, res) => {
  res.set(headersTextPlain);
  res.send(
    'function task(x) { return new Promise((res,rej)=> x < 18 ? res(`yes`) : rej(`no`) ) }'
  );
});

app.get('/fetch/', (req, res) => {
  res.set(headersTextHtml);
  res.send(`
    <html>
      <head></head>
      <body>
        <input id="inp" />
        <button id="bt" onclick="fetchData()">
          BUTTON
        </button>
        <script>
          {function fetchData() {
            fetch(document.getElementById('inp').value)
              .then((r) => r.text())
              .then((x) => (document.getElementById('inp').value = x));
          }}
        </script>
      </body>
    </html>`);
});

app.get('/result4/', (req, res) => {
  const result = {
    message: login,
    'x-result': req.headers['x-test'],
  };
  let body = '';

  req
    .on('data', (chunk) => (body += chunk))
    .on('end', () => {
      result['x-body'] = body;
      res.writeHead(200, { headersJson, ...CORS });
      res.end(JSON.stringify(result));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
