const mysql = require('mysql')

const   connection_sql = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'gfg'
})

module.exports={
    connection_sql
}

