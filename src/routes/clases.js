const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clasesSchema = require("../models/clases");
//Nueva clase
router.post("/clases", (req, res) => {
    const clases = clasesSchema(req.body);
    clases
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
//Consultar clases
router.get("/clases", (req, res) => {
    clasesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar la clase por el id
router.get("/clases/:id", (req, res) => {
    const { id } = req.params;
    conduccionSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar la clase por el id
router.put("/clases/:id", (req, res) => {
    const { id } = req.params;
    const { instructor, vehiculo , fecha ,duracionHoras , estudiante , tipo ,observaciones} = req.body;
    clasesSchema
        .updateOne({ _id: id }, {
            $set: { instructor, vehiculo , fecha ,duracionHoras , estudiante , tipo ,observaciones}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar la clase por el id 
router.delete("/clases/:id", (req, res) => {
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