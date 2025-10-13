const { default: mongoose } = require("mongoose");

const schemaTransitions = new mongoose.Schema(
    {
        productID: {
            type: String,
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
        },
    }
)
const Transition = mongoose.model('Transitions',schemaTransitions);
module.exports = Transition;