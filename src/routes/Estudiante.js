const express = require("express");
const router = express.Router(); //manejador de rutas de express
const estudianteSchema = require("../models/EstudianteD");
//Nuevo estudiante
router.post("/estudiante", (req, res) => {
    const estudiante = estudianteSchema(req.body);
    estudiante
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;


//Consultar estudiante
router.get("/Estudiante", (req, res) => {
    clasesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar los estudiantes por el id
router.get("/Estudiante/:id", (req, res) => {
    const { id } = req.params;
    conduccionSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar los estudiantes por el id
router.put("/Estudiante/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, correo, telefono, direccion } = req.body;
    clasesSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, correo, telefono, direccion }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar los estudiantes por el id 
router.delete("/Estudiante/:id", (req, res) => {
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