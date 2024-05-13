const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clasesSchema = require("../models/EstudianteD");
const conduccionSchema = require("../models/EstudianteD");
const verifyToken = require('../routes/validate_token');
const EstudianteD = require("../models/EstudianteD");

//Nuevo estudiante
router.post("/EstudianteD", verifyToken, (req, res) => {
    const clases = clasesSchema(req.body);
    EstudianteD
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar estudiante
router.get("/EstudianteD", (req, res) => {
    clasesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar los estudiantes por el id
router.get("/EstudianteD/:id", (req, res) => {
    const { id } = req.params;
    conduccionSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar los estudiantes por el id
router.put("/EstudianteD/:id", (req, res) => {
    const { id } = req.params;
    const { nombre,edad,correo,telefono,direccion} = req.body;
    clasesSchema
        .updateOne({ _id: id }, {
            $set: {  nombre,edad,correo,telefono,direccion}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar los estudiantes por el id 
router.delete("/EstudianteD/:id", (req, res) => {
    const { id } = req.params;
    clasesSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});

module.exports = router;