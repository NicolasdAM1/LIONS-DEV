const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

console.log(new Date());

let corpoDiscente = [];

const gerarMatricula = () => {
    return Date.now().toString();
}


app.post('/estudante',(req, res) => {
    const { nome, curso, ano } = req.body;
    let estudante = {
        matricula: gerarMatricula(),
        nome,
        curso,
        ano,
    }
corpoDiscente.push(estudante);
res.status(201).json(estudante);
})


app.get('/estudantes',(req, res) => {
    res.status(200).json(corpoDiscente);
})


app.put('/estudante/:matricula', (req, res) => {
    const { matricula } = req.params;
    const { nome, curso, ano } = req.body;
    
    if (!nome || !curso || !ano) {
        return res.status(400).json({ mensagem: 'PUT requires all student data (nome, curso, ano).' });
    }
    
    const index = corpoDiscente.findIndex(estudante => estudante.matricula === matricula);
    
    if (index === -1) {
        return res.status(404).json({ mensagem: 'Estudante não encontrado.' });
    }
    
    corpoDiscente[index] = { matricula, nome, curso, ano };
    
    res.status(200).json(corpoDiscente[index]);
});



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});