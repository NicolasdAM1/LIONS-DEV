const { LerLivro } = require("../utils.js")

function listBook(req, res ){

    const biblioteca = LerLivro();
    if(biblioteca.length <= 0){
        res.status(400).send('A biblioteca está vazia.')
    }
    res.status(201).send(biblioteca)
}
module.exports = { listBook }