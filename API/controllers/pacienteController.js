const Paciente = require('../models/Paciente.js')

//cuando se crea un nuevo cliente
nuevoCliente = async(req, res, next) => {
    //crear obj del paciente
    const paciente = new Paciente(req.body);

    // insertar en la base de datos
    try {
        await paciente.save();
        res.json({mensaje: 'El cliente se agrego correctamente.'})
    } catch (error) {
        console.log(error);
        next();
    }
}

obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// obtiene un paciente por id 

obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id :  req.params.id}, req.body, {
            new:true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}

module.exports = {
    nuevoCliente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
}