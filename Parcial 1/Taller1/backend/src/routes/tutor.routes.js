const express = require('express')
const {obtenerTutores,insertarTutores} = require('../controllers/tutor.controller')
const TutorRouter = express.Router()


TutorRouter.post('/', insertarTutores)
TutorRouter.get('/',obtenerTutores)


module.exports = TutorRouter