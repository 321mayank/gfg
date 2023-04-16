const express = require('express')
const app = express()
const session = require('express-session')
const { fetchHealthRecords } = require('../controller/userHealthRecords')
const records = express.Router()
records.use(
    session({
      secret: 'IEMGFGTEAM',
      resave: true,
      saveUninitialized: true,
    })
  );

  records.get('/userHealthReords',fetchHealthRecords )
module.exports= records