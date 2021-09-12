const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();
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
  'Access-Control-Allow-Origin': '*',
};

app.use(express.json());

app.get('/', (req, res) => {
  res.set(headersTextHtml);
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

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
