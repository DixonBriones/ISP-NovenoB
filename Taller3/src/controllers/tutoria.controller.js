const {response}= require('express')
const { Tutoria } = require('../models')


const insertarTutoria = async (req, res = response) => {
    console.log('Intentando guardar tutoria ...');

    const tutoria = new Tutoria({
        Id_Tutor: req.body.Id_Tutor,
        Id_Tutorado: req.body.Id_Tutorado,
        asignatura:  req.body.asignatura,
        fecha:  req.body.fecha,
        hora:  req.body.hora,
        valor:  req.body.valor
    });

    try {
        await tutoria.save();
        res.status(200)
            .json({ mensaje: 'Tutoria guardada', tutoria: { id: tutoria._id, cedula: tutoria.asignatura } });
        console.log('Tutoria Guardada');
    } catch (err) {
        console.error('Error al guardar la tutoria');
        console.error(err.message);
        res.status(500).json({ message: 'Fallo al guardar la tutoria.' });
    }
}

const obtenerTutorias = async (req, res) => {
    console.log('Consiguiendo tutores');
    try {
        const tutorias = await Tutoria.find();
        res.status(200).json({
            tutorias: tutorias.map((tutoria) => ({
                id: tutoria._id,
                Id_Tutor: tutoria.Id_Tutor,
                Id_Tutorado: tutoria.Id_Tutorado,
                asignatura: tutoria.asignatura,
                fecha: tutoria.fecha,
                hora: tutoria.hora,
                valor: tutoria.valor
            })),
        });
    console.log('Tutorias conseguidas');
    } catch (err) {
        console.error('Error al conseguir las tutorias');
        console.error(err.message);
        res.status(500).json({ message: 'Fallo en cargar tutorias.' });
    }
}

module.exports={insertarTutoria,obtenerTutorias};