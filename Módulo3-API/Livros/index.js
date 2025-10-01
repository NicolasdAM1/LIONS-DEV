const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

console.log(new Date());

let estante = [];

const gerarId = () => {
    return Date.now().toString();
};

app.post('/livros',(req, res) => {
    const { title, author, year, genre } = req.body;
    let livro = {
    id: gerarId(),
    title,
    author,
    year,
    genre,
}
estante.push(livro);

res.status(201).json(livro)
})


app.get('/livros',(req,res) => {
    res.status(200).json(estante);
})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});