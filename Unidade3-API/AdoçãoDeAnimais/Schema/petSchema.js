const mongoose = require('mongoose');
const petSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Species: {
            type: String,
            required: true,
        },
        Age: {
            type: Number,
            required: true,
        },
        Status: {
            type: String,
            required: true,
            enum: ["disponível", "em andamento"]
        },
    },
)
const Adoption = mongoose.model('adoptions', petSchema)
module.exports = Adoption;