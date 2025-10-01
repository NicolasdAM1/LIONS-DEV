const { default: mongoose } = require("mongoose");

const schemaMovements = new mongoose.Schema(
    {
        productID: {
            type: String,
            required: true,
        },
        Type: {
            type: String,
            required: true,
        },
        Quantity: {
            type: Number,
            required: true,
        },
        Date: {
            type: Date,
            default: Date.now,
        },
    }
)
const Movement = mongoose.model('Movements',schemaMovements);
module.exports = Movement;