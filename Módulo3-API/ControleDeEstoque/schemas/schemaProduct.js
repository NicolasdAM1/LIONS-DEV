const { default: mongoose } = require("mongoose");

const schemaProducts = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Quantity: {
            type: Number,
            required: true,
        }
    }
)
const Product = mongoose.model('Products',schemaProducts);
module.exports = Product;