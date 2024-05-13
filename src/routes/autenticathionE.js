const express = require("express");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/EstudianteAutenticathion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
    const { usuario, correo, clave , codigo } = req.body;
    const Estudiante = new userSchema({
        usuario: usuario,
        correo: correo,
        clave: clave,
        codigo: codigo
    });
    Estudiante.clave = await user.encryptClave(Estudiante.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB //segundo parámetro: un texto que hace que el código generado sea único //tercer parámetro: tiempo de expiración (en segundos, 24 horas en segundos)
    //primer parámetro: payload - un dato que se agrega para generar el token
    const token = jwt.sign({ id: Estudiante._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24, //un día en segundos
    });
    res.json({
        auth: true,
        token,
    });
});