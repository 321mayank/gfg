const express = require('express')
const app = express()
const session = require('express-session')
const {userDashboard} = require('../controller/dashboard')
const dashboard = express.Router()

dashboard.get('/userDashboard',userDashboard )

module.exports= dashboard