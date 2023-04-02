const express = require('express')
const app = express()
const session = require('express-session')
const login_router = express.Router()

const { login } = require('../controller/login')


// login_router.get('/login', login_render);
login_router.post('/login', login); 


module.exports = login_router