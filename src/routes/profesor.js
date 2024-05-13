const express = require("express");
const router = express.Router(); //manejador de rutas de express
const clasesSchema = require("../models/profesorD");
const conduccionSchema = require("../models/profesorD");
const verifyToken = require('../routes/validate_token');
const profesorD = require("../models/profesorD");

//Nueva practica del buen desarrollo
router.post("/profesorD", verifyToken, (req, res) => {
    const clases = clasesSchema(req.body);
    profesorD
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error
    }));
});

