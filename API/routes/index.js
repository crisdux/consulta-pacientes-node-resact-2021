const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController.js')

module.exports = function(){
    //Agrega nuevos pacientes con post
    router.post('/pacientes', pacienteController.nuevoCliente)

    return router;
}