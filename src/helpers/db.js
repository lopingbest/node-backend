const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'backend_node',
    user:'root',
    password:''
})

module.exports = connection