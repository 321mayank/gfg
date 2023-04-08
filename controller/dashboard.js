const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userDashboard =(req,res)=>{
  res.render("userDashboard")
}

const profileView = (req, res) => {
 
  const name  = req.session.aadhar
  console.log(name)
  res.send(name)
};


module.exports={ userDashboard , profileView}