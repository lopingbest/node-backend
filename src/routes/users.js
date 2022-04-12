const route = require('express').Router();

const {listUser} = require('../controller/users')

// Can access controller which attach data from model, model attach data from database
route.get('/', listUser)

module.exports = route