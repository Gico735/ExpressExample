const express = require('express')
const app = express()
const fs = require('fs')

const index = fs.readFileSync('index.html')
console.log(index)

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

