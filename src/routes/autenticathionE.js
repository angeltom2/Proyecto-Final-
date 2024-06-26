const express = require("express");
const router = express.Router(); //manejador de rutas de express
const userSchema = require("../models/EstudianteAutenticathion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post('/signupE', async (req, res) => {
    const { usuario, correo, clave ,codigo} = req.body;
    const user = new userSchema({
        usuario: usuario,
        correo: correo,
        clave: clave,
        codigo: codigo
    });
    user.clave = await user.encryptClave(user.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB 
    res.json(user);
});
module.exports = router;


//inicio de sesión
router.post("/loginE", async (req, res) => {
    // validaciones
    const { error } = userSchema.validate(req.body.correo, req.body.clave);
    if (error) return res.status(400).json({ error: error.details[0].message });
    //Buscando el usuario por su dirección de correo
    const user= await userSchema.findOne({ correo: req.body.correo });
    //validando si no se encuentra
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });
    //Transformando la contraseña a su valor original para 
    //compararla con la clave que se ingresa en el inicio de sesión
    const validPassword = await bcrypt.compare(req.body.clave, user.clave);
    if (!validPassword)
        return res.status(400).json({ error: "Clave no válida" });
    res.json({
        error: null,
        data: "Bienvenido(a)",
    });
});

module.exports = router;