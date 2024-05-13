const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clasesSchema = require("../models/notas");
const conduccionSchema = require("../models/notas");
const verifyToken = require('../routes/validate_token');
const notas = require("../models/notas");

//metodo post 
router.post("/notas", verifyToken, (req, res) => {
    const clases = clasesSchema(req.body);
    notas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
