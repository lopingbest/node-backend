const {listUsersModel} = require('../models/users');

exports.listUser = (req,res)=>{
    listUsersModel(results =>{
        return res.send({
            success: true,
            message: 'List users',
            results
        })
    })
}