const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clasesSchema = require("../models/clases");
const conduccionSchema = require("../models/clases");
const verifyToken = require('../routes/validate_token');
const clases = require("../models/clases");

//Nueva clase agregada 
router.post("/clases", verifyToken, (req, res) => {
    const clases = clasesSchema(req.body);
    clases
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});