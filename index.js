require('dotenv').config();
const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/components/', function (err) {});

app.get('/', (req, res) => {});

app.get('/login', (req, res) => {
  res.render('login', {
    name: 'Federico',
  });
});

app.get('*', (req, res) => {
  res.send('404');
});

app.listen(process.env.PORT, () => {
  console.log(`Working on ${process.env.PORT}`);
});
