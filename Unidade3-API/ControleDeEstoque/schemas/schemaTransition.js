const mongoose = require("mongoose");

const schemaTransitions = new mongoose.Schema({
    productID: {
        type: String, // ou ObjectId com ref se quiser populate
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Transaction = mongoose.model('Transitions', schemaTransitions);
module.exports = Transaction;
