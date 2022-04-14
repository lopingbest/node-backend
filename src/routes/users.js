const route = require('express').Router();

const {listUser,createUser,updateUser,deleteUser} = require('../controller/users')

// Can access controller which attach data from model, model attach data from database
route.get('/', listUser)
route.post('/', createUser)
route.patch('/:id', updateUser)
route.delete('/:id', deleteUser)

module.exports = route