const mysql = require('mysql')
const { HOST, USER, PASSWORD, DATABASE, PORT } = require('./config')

module.exports = () =>{
    return mysql.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE,
        port: PORT
    })
}