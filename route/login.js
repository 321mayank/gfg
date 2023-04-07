const express = require('express');
const app = express();
const session = require('express-session');
const login_router = express.Router();

const { login_render, login } = require('../controller/login');

login_router.get('/userLogin', login_render);
login_router.post('/userLogin', login);

module.exports = login_router;
