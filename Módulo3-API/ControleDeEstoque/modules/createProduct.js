const Product = require("../schemas/schemaProduct.js");

async function createProduct(req, res) {
    const { Name, Quantity } = req.body;
    if (!Name || !Quantity)
        return res.status(400).send("Todos os campos são necessários");

    try {
        const product = new Product({ Name, Quantity });
        const savedProduct = await product.save();
        res.status(201).json({ message: 'Produto salvo no banco de dados.', product: savedProduct });
    } catch (error) {
        console.error('Erro ao salvar produto:', error);
        res.status(500).send('Erro interno ao salvar produto.');
    }
}

module.exports = { createProduct };
