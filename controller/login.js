const { loginQuery } = require('../database/query')
const {connection_sql} = require('../database/sql_connection')
const express = require('express')
const app = express()
const session = require('express-session');
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
            const {AadharNo,FirstName,LastName,GuardianName,GuardianRelation,Age,Gender,Email  } = result[0];
              req.session.aadharNo = AadharNo;
              req.session.firstName = FirstName; 
              req.session.lastName = LastName;
              req.session.guardianName = GuardianName;
              req.session.guardianRelation = GuardianRelation;
              req.session.age = Age;
              req.session.gender = Gender;
              req.session.email = Email;
            res.redirect('/userDashboard')

        
          } else {
            res.send('NO record Found');
          }

        }
      })
   
}



module.exports= { login_render, login}