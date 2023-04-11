const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const {connection_sql} = require('../database/sql_connection')
const { recordFetchQuery } = require('../database/query')

app.use(bodyParser.urlencoded({ extended: false }));    
app.use(bodyParser.json());


const fetchHealthRecords = (req , res)=> {
const aadhar = req.session.aadharNo;
connection_sql.query(recordFetchQuery(aadhar), (err,result)=>{
        
    if (err) {
      console.log(err);
      res.send('An error occurred');
    } else{
      if (result.length > 0) {
        console.log(result);
        res.render('healthRecords', { records: result });

        
          } else {
            res.send('NO record Found');
          }

    }





})
}




module.exports={
    fetchHealthRecords
}