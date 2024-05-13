const mongoose = require("mongoose");

const estudianteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: Number,
        required: true,
        min: 0
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Estudiante", estudianteSchema);