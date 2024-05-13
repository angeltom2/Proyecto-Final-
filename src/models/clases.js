const mongoose = require("mongoose");

const claseSchema = mongoose.Schema({
    instructor: {
        type: mongoose.Schema.Types.ObjectId, // Referencia al ID del instructor
        ref: 'Instructor', // Referencia al modelo de instructor
        required: true
    },
    vehiculo: {
        type: String,
        required: true,
        trim: true
    },
    fecha: {
        type: Date,
        required: true
    },
    duracionHoras: {
        type: Number,
        required: true,
        min: 1
    },
    estudiante: [{
        type: mongoose.Schema.Types.ObjectId, // Referencia al ID del estudiante
        ref: 'Estudiante' // Referencia al modelo de estudiante
    }],
    tipo: {
        type: String,
        enum: ['Teórica', 'Práctica'],
        required: true
    },
    observaciones: {
        type: String
    }
});

module.exports = mongoose.model("Clases", claseSchema);