const connection_sql = require('../database/sql_connection')

const loginQuery = (aadhar)=>{
    return `SELECT * FROM user WHERE AadharNo='${aadhar}'`
  }

  const recordFetchQuery= (aadhar)=>{
    return `SELECT * FROM userhealth WHERE aadharNo='${aadhar}'`
  }
  module.exports={
    loginQuery,
    recordFetchQuery
  }