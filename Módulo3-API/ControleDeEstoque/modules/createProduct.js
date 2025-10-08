const Product = require("../schemas/schemaProduct.js");


async function createProduct(req, res){
    const { Name, Quantity } = req.body;
    if(!Name || !Quantity)
        return res.status(400).send("Todos os campos são necessários");

    const product = new Product ({
        Name,
        Quantity: Quantity,
    });

    const SaveProduct = await product.save();
    res.status(201).send('Produto salvo no banco de dados.', SaveProduct);
}

module.exports = { createProduct };
