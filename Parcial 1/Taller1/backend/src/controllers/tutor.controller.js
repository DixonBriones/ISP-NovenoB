const {response}= require('express')
const { Tutor } = require('../models')


const insertarTutores = async (req, res = response) => {
    console.log('Intentando guardar tutor ...');

    const tutor = new Tutor({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        experticia:  req.body.experticia
    });

    try {
        await tutor.save();
        res.status(201)
            .json({ mensaje: 'Tutor guardado', tutor: { id: tutor._id, cedula: tutor.cedula } });
        console.log('Tutor Guardado');
    } catch (err) {
        console.error('Error al guardar el tutor');
        console.error(err.message);
        res.status(500).json({ message: 'Fallo al guardar el tutor.' });
    }
}

const obtenerTutores = async (req, res) => {
    console.log('Consiguiendo tutores');
    try {
        const tutores = await Tutor.find();
        res.status(200).json({
            tutores: tutores.map((tutor) => ({
                id: tutor._id,
                cedula: tutor.cedula,
                nombre: tutor.nombre,
                experticia: tutor.experticia
            })),
        });
    console.log('Tutores conseguidos');
    } catch (err) {
        console.error('Error al conseguir los tutores');
        console.error(err.message);
        res.status(500).json({ message: 'Fallo en cargar tutores.' });
    }
}

module.exports={insertarTutores,obtenerTutores};