var express = require('express')
var route = express()
const questionController = require('../controllers/questionController')
const movieController = require('../controllers/movieController')

// respond with "hello world" when a GET request is made to the homepage
route.get('/question', questionController.show)
route.get('/movie', movieController.show)


module.exports = route