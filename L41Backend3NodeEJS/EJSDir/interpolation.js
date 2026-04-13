// Node.js + Express
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { 
    title: 'My Page', 
    user: { name: 'Alice' } 
  });
});
