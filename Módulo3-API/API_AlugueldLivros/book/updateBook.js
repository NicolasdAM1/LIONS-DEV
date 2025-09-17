const { LerLivro, SalvarLivro } = require("../utils.js");

function updateBook(req, res){
    
    const biblioteca = LerLivro();
    if(biblioteca.length <= 0){
        res.status(400).send('A biblioteca está vazia.')
    }

    const id = Number(req.params.id)
    const { title, author, year, genre } = req.body

    const newBook = {
        id: id,
        title,
        author,
        year: parseInt(year),
        genre,
    };

    if(!title || !author || !year || !genre){
        return res.status(400).send('Dados incompletos. PUT necessita de todos os dados');
    }

    const index = biblioteca.findIndex(book => book.id === id);

    if(index == -1){
        return res.status(404).json({mensagem: 'Livro não encontrado' });
    }

    biblioteca[index] = newBook;
    SalvarLivro(biblioteca);
    res.status(200).json(newBook);
}
module.exports = { updateBook }