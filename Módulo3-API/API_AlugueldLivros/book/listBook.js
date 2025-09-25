const Livro = require("../schema/schemaLivro")

async function listBook(req, res ){

    const Biblioteca = await Livro.find()

    if(!Biblioteca){
        return res.status(400).send("Biblioteca vazia. Nenhum livro a ser listado.")
    }

    res.status(200).send({Biblioteca})
}
module.exports = { listBook }