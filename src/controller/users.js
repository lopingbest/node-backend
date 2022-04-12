const {listUsersModel,createUsersModel} = require('../models/users');

exports.listUser = (req,res)=>{
    listUsersModel(results =>{
        return res.send({
            success: true,
            message: 'List users',
            results
        })
    })
}

exports.createUser=(req,res)=>{
    createUsersModel(req.body, results => {
        if(results.affectedRows > 0 ){
            return res.send({
                success: true,
                message: "Create user successfully",
                results
            })
        }else{
            return res.send({
                success: false,
                message: 'Failed to create user'
            })
        }
    })
}