const { LerLivro, SalvarLivro } = require("../utils.js");

function removeBook(req, res){
    const id = Number(req.params.id)
    const biblioteca = LerLivro();
    if(biblioteca.length <= 0){
        res.status(400).send('A biblioteca está vazia.')
    }

    const index = biblioteca.findIndex(book => book.id === id);

    if(index == -1){
        return res.status(404).json({mensagem: 'Livro não encontrado' });
    }

    biblioteca.splice(index,1);
    SalvarLivro(biblioteca);
    res.status(200).send('Livro removido da biblioteca.');
}
module.exports = { removeBook }