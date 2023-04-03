const { loginQuery } = require('../database/query')
const {connection_sql} = require('../database/sql_connection')
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const login_render =(req,res)=>{
  res.render("login")
}

const login = (req, res) => { 
     const {aadhar } = req.body
     console.log(aadhar);
      connection_sql.query(loginQuery(aadhar), (err,result)=>{
        
        if (err) {
          console.log(err);
          res.send('An error occurred');
        } else {
        
          if (result.length > 0) {
                res.send (result)

        
          } else {
            res.send('NO record Found');
          }

        }
      })
   
}

module.exports= { login_render, login}