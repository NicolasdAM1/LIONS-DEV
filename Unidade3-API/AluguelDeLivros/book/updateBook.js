const Livro = require("../schema/schemaLivro.js");


async function updateBook(req, res){
    
    const id = req.params.id
    const newBook = req.body;
    const novoLivro = await Livro.findByIdAndUpdate(id,newBook,{
        new: true,
        runValidators: true,
    });
    if(!novoLivro){
        return res.status(400).send('Livro não encontrado.');
    }

    res.status(200).send('Livro atualizado.')
}
module.exports = { updateBook }