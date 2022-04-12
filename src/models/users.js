// read data users table mysql
const db = require('../helpers/db');


exports.listUsersModel = (cb)=>{
    db.query('SELECT * FROM users', (err,results, _fields)=>{
        if (err) throw new Error(err)
        cb(results)
    })
}