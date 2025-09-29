const mongoose = require("mongoose");
const schemaAluguel = new mongoose.Schema(
    {
        idLivro: {
            type: String,
            required: true,
        },
        idAluno: {
            type: String,
            required: true,
        },
        dataAluguel: {
            type: Date,
            default: Date.now,
        },
        dataDevolver: {
            type: String,
            default: null,
        },
    },
)

const Aluguel = mongoose.model('aluguéis',schemaAluguel);
module.exports = Aluguel;