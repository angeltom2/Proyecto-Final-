const express = require("express");
const router = express.Router(); //manejador de rutas de express
const profesorSchema = require("../models/ProfesorAutenticathion");
router.post('/signupP', async (req, res) => {
    const { usuario, correo, clave , rol} = req.body;
    const profesor = new profesorSchema({
        usuario: usuario,
        correo: correo,
        clave: clave,
        rol: rol
    });
    profesor.clave = await profesor.encryptClave(profesor.clave);
    await profesor.save(); //save es un método de mongoose para guardar datos en MongoDB 
    res.json(profesor);
});
module.exports = router;


//inicio de sesión
router.post("/loginP", async (req, res) => {
    // validaciones
    const { error } = profesorSchema.validate(req.body.correo, req.body.clave);
    if (error) return res.status(400).json({ error: error.details[0].message });
    //Buscando el usuario por su dirección de correo
    const profesor = await profesorSchema.findOne({ correo: req.body.correo });
    //validando si no se encuentra
    if (!profesor) return res.status(400).json({ error: "Usuario no encontrado" });
    //Transformando la contraseña a su valor original para 
    //compararla con la clave que se ingresa en el inicio de sesión
    const validPassword = await bcrypt.compare(req.body.clave, profesor.clave);
    if (!validPassword)
        return res.status(400).json({ error: "Clave no válida" });
    res.json({
        error: null,
        data: "Bienvenido(a)",
    });
});

module.exports = router;