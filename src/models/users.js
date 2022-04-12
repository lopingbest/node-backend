// read data users table mysql
const res = require('express/lib/response');
const db = require('../helpers/db');


exports.listUsersModel = (cb)=>{
    db.query('SELECT * FROM users', (err,results, _fields)=>{
        if (err) throw new Error(err)
        cb(results)
    })
}

exports.createUsersModel = (data, cb)=>{
    db.query(`INSERT INTO users (name, birthdate, phone) VALUES ('${data.name}',
     '${data.birthdate}','${data.phone}')`,(err,results,_fields)=>{
         if(err)throw new Error(err)
         cb(results)
     })
}