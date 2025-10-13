const Product = require('../schemas/schemaProduct.js');
const Transaction = require('../schemas/schemaTransition.js');

async function addQuantity(req, res){
    
    const { productID, quantity, type } = req.body;

    if (!productID || !quantity || typeof quantity !== 'number' || !type)
        return res.status(400).send('Todos os campos são obrigatórios.');

    if (!['entrada', 'saída'].includes(type))
        return res.status(400).send('O tipo deve ser "entrada" ou "saída".');

    try {
        const incValue = type === 'entrada' ? quantity : -quantity;

        const updatedProduct = await Product.findByIdAndUpdate(
            productID,
            { $inc: { Quantity: incValue } },
            { new: true }
        );

        if (!updatedProduct)
            return res.status(404).send('Produto não encontrado.');

        await Transaction.create({
            productID,
            type,
            quantity,
            date: new Date(),
        });

        return res.status(200).send({ message: 'Quantidade atualizada e transação registrada.', product: updatedProduct });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao atualizar produto ou registrar transação.');
    }
}

module.exports = { addQuantity };