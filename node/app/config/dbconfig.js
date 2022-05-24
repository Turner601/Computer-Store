const mysql = require('mysql2')

// creatPool allows multiple connections. If you did createConnection then there is only 1 connection
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'computer_store2'
})

module.exports = pool