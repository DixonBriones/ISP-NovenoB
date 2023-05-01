const express = require('express')
const {obtenerTutorias,insertarTutoria} = require('../controllers/tutoria.controller')
const TutoriaRouter = express.Router()


TutoriaRouter.post('/', insertarTutoria)
TutoriaRouter.get('/',obtenerTutorias)


module.exports = TutoriaRouter