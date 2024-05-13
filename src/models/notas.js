const mongoose = require("mongoose");

const notaSchema = mongoose.Schema({
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estudiante',
        required: true
    },
    clase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clase',
        required: true
    },
    tipo: {
        type: String,
        enum: ['Teórica', 'Práctica'],
        required: true
    },
    categoria: {
        type: String,
        enum: ['Examen', 'Taller'],
        required: true
    },
    puntaje: {
        type: Number,
        required: true,
        min: 0,
        max: 50
    },
    observaciones: {
        type: String
    }
});

module.exports = mongoose.model("Nota", notaSchema);