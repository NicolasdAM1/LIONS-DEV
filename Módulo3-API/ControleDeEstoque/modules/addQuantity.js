const Product = require('../schemas/schemaProduct.js');

async function addQuantity(req, res){

    if(!Quantity || typeof Quantity != 'number')
        return res.status(400).send('A quantidade é obrigatória.')

    const updateProduct = await newProduct.findByIdAndUpdate(
        id,
        { $inc: {Quantity: Quantity} },
    );

    if(!updateProduct)
        return res.status(400).send('Produto não encontrado/cadastrado no banco de dados.');

    await createTransition({
        productId
    })



}