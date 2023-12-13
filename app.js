const express = require('express');
const ejs = require('ejs');

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Public file saved. || MIDDLEWARE
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} Portunda Çalıştırıldı.`);
});
