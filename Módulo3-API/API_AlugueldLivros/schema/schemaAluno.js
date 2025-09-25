const mongoose = require('mongoose');
const schemaAluno = new mongoose.Schema(
    {
        Matricula: {
            type: Number,
            required: true,
        },
        Nome: {
            type: String,
            required: true,
        },
        Curso: {
            type: String,
            required: true,
        },
        Ano: {
            type: String,
            required: true,
        },
    }
)