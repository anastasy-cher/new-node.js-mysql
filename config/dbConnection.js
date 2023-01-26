const mysql = require('mysql')
const {MYSQL_ADDON_HOST,MYSQL_ADDON_DB, MYSQL_ADDON_USER, MYSQL_ADDON_PORT, MYSQL_ADDON_PASSWORD } = require('./config')

module.exports = () =>{
    return mysql.createConnection({
        host: MYSQL_ADDON_HOST,
        user: MYSQL_ADDON_USER,
        password: MYSQL_ADDON_PASSWORD,
        database: MYSQL_ADDON_DB,
        port:MYSQL_ADDON_PORT
    })
}