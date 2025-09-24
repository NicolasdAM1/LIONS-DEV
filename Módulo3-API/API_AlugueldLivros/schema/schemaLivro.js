const mongoose = require("mongoose");
const schemaLivro = new mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
        },
        Author: {
            type: String,
            required: true,
        },
        Year: {
            type: Number,
            required: true,
        },
        Genre: {
            type: String,
            required: true,
        },
    }
)





