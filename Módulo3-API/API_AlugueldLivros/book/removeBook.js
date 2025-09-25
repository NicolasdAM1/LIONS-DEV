
const Livro = require("../schema/schemaLivro.js");

async function removeBook(req, res){
    try{
        const id = req.params.id

        const Biblioteca = Livro.find()
        if(!Biblioteca){
            return res.status(400).send('Livro não encontrado.')
        }
        const deletarLivro = await Biblioteca.findByIdAndDelete(id);
        res.status(200).send('Livro removido da biblioteca de dados.',deletarLivro)

    } catch(error){
        console.error(`Não foi possível remover o livro da biblioteca.`,error)
    }
}
module.exports = { removeBook }