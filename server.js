const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
<<<<<<< HEAD
const login_router = require('./route/login');
=======
const login_router = require('./route/login')
const dashboard = require('./route/dashboard')
>>>>>>> 92297a2f761940e259c4924f2464a955b99408b4
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  //rendered the login page
  res.render('index');
});

app.use('/', login_router);

<<<<<<< HEAD
app.use(express.static('public'));
=======
app.get('/', (req, res) => { //rendered the login page
    res.render('index');
})


app.use('/',login_router);
app.use('/',dashboard)


>>>>>>> 92297a2f761940e259c4924f2464a955b99408b4

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
