const Livro = require("../schema/schemaLivro.js");

async function postBook(req, res){
    const { Title, Author, Year, Genre } = req.body
    if(!Title || !Author || !Year || !Genre){
        res.status(400).send("Dados incompletos. Insira todos os campos necessários.");
    }

    const book = new Livro({
        Title,
        Author,
        Year,
        Genre,
    });

    const SaveLivro = await book.save();
    res.status(201).send("Livro adicionado à biblioteca.",SaveLivro);   
    
}
module.exports = { postBook }; 
