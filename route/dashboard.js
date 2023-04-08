const express = require('express')
const app = express()
const session = require('express-session')
const {userDashboard , profileView} = require('../controller/dashboard')
const dashboard = express.Router()
dashboard.use(
    session({
      secret: 'paroisbewda',
      resave: true,
      saveUninitialized: true,
    })
  );

dashboard.get('/userDashboard',userDashboard )
dashboard.get('/userProfle',profileView)
module.exports= dashboard