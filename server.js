const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
const login_router = require('./route/login');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  //rendered the login page
  res.render('index');
});

app.use('/', login_router);

app.use(express.static('public'));

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
