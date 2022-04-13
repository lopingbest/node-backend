const {listUsersModel,createUsersModel,updateUsersModel} = require('../models/users');

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

exports.updateUser=(req,res)=>{
    updateUsersModel(req.params.id, req.body, results =>{
        if(results.affectedRows > 0 ){
            return res.send({
                success: true,
                message: "Update user successfully",
            })
        }else{
            return res.send({
                success: false,
                message: 'Failed to update user'
            })
        }       
    })
}