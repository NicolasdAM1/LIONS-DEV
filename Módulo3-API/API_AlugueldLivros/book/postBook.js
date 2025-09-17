const { LerLivro, SalvarLivro } = require("../utils.js");

function postBook(req, res){
    const { title, author, year, genre } = req.body
    if(!title || !author || !year || !genre){
        res.status(400).send("Dados incompletos. Insira todos os campos necessários.");
    }
    const biblioteca = LerLivro()
    const book = {
        id: Date.now(),
        title,
        author,
        year: parseInt(year),
        genre,
    };

    res.status(201).send("Livro adicionado à biblioteca.");
    biblioteca.push(book)
    SalvarLivro(biblioteca);
    
}
module.exports = { postBook };
