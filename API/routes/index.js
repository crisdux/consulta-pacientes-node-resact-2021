const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController.js')

module.exports = function(){
    //Agrega nuevos pacientes con post
    router.post('/pacientes', pacienteController.nuevoCliente);

    //Obtiene todos los pacientes
    router.get('/pacientes', pacienteController.obtenerPacientes);

    //obtiene un paciente or id
    router.get('/pacientes/:id', pacienteController.obtenerPaciente);

    // actualizar un registro con id 
    router.put('/pacientes/:id', pacienteController.actualizarPaciente);

    // elimina un paciente por id 
    router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

    return router;
}