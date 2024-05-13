const express = require("express");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/profesorAutenticathion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
    const { usuario, correo, clave , rol } = req.body;
    const profesor = new userSchema({
        usuario: usuario,
        correo: correo,
        clave: clave,
        rol : rol
    });
    profesor.clave = await user.encryptClave(profesor.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB //segundo parámetro: un texto que hace que el código generado sea único //tercer parámetro: tiempo de expiración (en segundos, 24 horas en segundos)
    //primer parámetro: payload - un dato que se agrega para generar el token
    const token = jwt.sign({ id: profesor_id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24, //un día en segundos
    });
    res.json({
        auth: true,
        token,
    });
});