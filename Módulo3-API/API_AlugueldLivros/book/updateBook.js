const Livro = require("../schema/schemaLivro");


async function updateBook(req, res){
    
    const Biblioteca = await Livro.find()
    if(!Biblioteca){
        return res.status(400).send("Biblioteca vazia. Nenhum livro a ser atualizado.")
    }

    const id = (req.params.id)
    const { Title, Author, Year, Genre } = req.body

    const newBook = {
        Title,
        Author,
        Year,
        Genre,
    };

    if(!Title || !Author || !Year || !Genre){
        return res.status(400).send('Dados incompletos. PUT necessita de todos os dados');
    }

    const index = Biblioteca.findIndex(book => book.id === id);

    if(index == -1){
        return res.status(404).json({mensagem: 'Livro não encontrado' });
    }

    Biblioteca[index] = newBook;
    res.status(200).json(newBook);
}
module.exports = { updateBook }