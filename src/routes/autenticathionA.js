const express = require("express");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/administradorAutenticathion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const administrador = require("../models/administradorAutenticathion");

router.post("/signup", async (req, res) => {
    const { usuario, correo, clave } = req.body;
    const Administrador = new userSchema({
        usuario: usuario,
        correo: correo,
        clave: clave,
    });
    administrador.clave = await Administrador.encryptClave(Administrador.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB //segundo parámetro: un texto que hace que el código generado sea único //tercer parámetro: tiempo de expiración (en segundos, 24 horas en segundos)
    //primer parámetro: payload - un dato que se agrega para generar el token
    const token = jwt.sign({ id: Administrador._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24, //un día en segundos
    });
    res.json({
        auth: true,
        token,
    });
});
