var express = require('express')
var route = express()
const questionController = require('../controllers/questionController')
const movieController = require('../controllers/movieController')
const userController = require('../controllers/userController')

// respond with "hello world" when a GET request is made to the homepage
route.post('/register', userController.register)
route.post('/login', userController.login)

route.get('/question', questionController.show)
route.get('/movie', movieController.show)


module.exports = route