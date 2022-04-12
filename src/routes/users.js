const route = require('express').Router();

const {listUser,createUser} = require('../controller/users')

// Can access controller which attach data from model, model attach data from database
route.get('/', listUser)
route.post('/', createUser)

module.exports = route