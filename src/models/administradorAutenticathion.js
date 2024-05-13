const mongoose = require("mongoose"); // importando el componente mongoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt
const userSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    }
});
