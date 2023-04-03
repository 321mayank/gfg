const connection_sql = require('../database/sql_connection')

const loginQuery = (aadhar)=>{
    return `SELECT * FROM user WHERE AadharNo='${aadhar}'`
  }

  module.exports={
    loginQuery
  }