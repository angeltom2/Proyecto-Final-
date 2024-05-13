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
