const mongoose = require("mongoose");

const instructorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    especialidad: {
        type: String,
        required: true,
        trim: true
    },
    experiencia: {
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

module.exports = mongoose.model("profesor", instructorSchema);