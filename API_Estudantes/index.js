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
    const { matricula } = req.params; // Get the matricula from the URL parameter
    const { nome, curso, ano } = req.body;
    
    // Validate that all required fields for a PUT request are present
    if (!nome || !curso || !ano) {
        return res.status(400).json({ mensagem: 'PUT requires all student data (nome, curso, ano).' });
    }
    
    // Find the student by matricula
    const index = corpoDiscente.findIndex(estudante => estudante.matricula === matricula);
    
    if (index === -1) {
        return res.status(404).json({ mensagem: 'Estudante não encontrado.' });
    }
    
    // Replace the entire object with the new data
    corpoDiscente[index] = { matricula, nome, curso, ano };
    
    res.status(200).json(corpoDiscente[index]);
});



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});