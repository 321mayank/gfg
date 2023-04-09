const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userDashboard =(req,res)=>{
  res.render("userDashboard")
}

const profileView = (req, res) => {
  const aadhar = req.session.aadharNo 
  const firstname  = req.session.firstName
  const lastname = req.session.lastName 
  const guardianName =  req.session.guardianName 
  const guardianRelation = req.session.guardianRelation 
  const age = req.session.age 
  const gender = req.session.gender 
  const email = req.session.email 
  res.render('profile', { 
    aadhar, 
    firstname, 
    lastname,
    guardianName,
    guardianRelation,
    age,
    gender,
    email
});
}

module.exports = { userDashboard, profileView, 
}