const express = require("express");
const router = express.Router(); //manejador de rutas de express
const profesorSchema = require("../models/profesorD");
const conduccionSchema = require("../models/profesorD");
const clasesSchema = require("../models/profesorD");
//Nueva clase
router.post("/profesor", (req, res) => {
    const profesor = profesorSchema(req.body);
    profesor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar profesor
router.get("/profesorD", (req, res) => {
    clasesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar el profesor por el id
router.get("/profesorD/:id", (req, res) => {
    const { id } = req.params;
    conduccionSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el profesor por el id
router.put("/profesorD/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, especialidad , experiencia,correo,telefono,direccion} = req.body;
    clasesSchema
        .updateOne({ _id: id }, {
            $set: { nombre, especialidad , experiencia,correo,telefono,direccion}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar el profesor por el id 
router.delete("/profesorD/:id", (req, res) => {
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