const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clasesSchema = require("../models/notas");
//Nueva clase
router.post("/notas", (req, res) => {
    const notas = clasesSchema(req.body);
    notas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar notas
router.get("/notas", (req, res) => {
    clasesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar las notas por el id
router.get("/notas/:id", (req, res) => {
    const { id } = req.params;
    conduccionSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar las notas  por el id
router.put("/notas/:id", (req, res) => {
    const { id } = req.params;
    const { estudiante, clase, tipo, categoria, puntaje, observaciones } = req.body;
    clasesSchema
        .updateOne({ _id: id }, {
            $set: { estudiante, clase, tipo, categoria, puntaje, observaciones }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar las notas por el id 
router.delete("/notas/:id", (req, res) => {
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