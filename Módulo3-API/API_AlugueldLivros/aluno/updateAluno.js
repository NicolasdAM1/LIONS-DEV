const { LerEstudante, SalvarEstudante } = require("../utils.js");

function updateAluno(req, res){
    
    const corpoDiscente = LerEstudante();
    if(corpoDiscente.length <= 0){
        res.status(400).send('O corpo discente está vazia.')
    }

    const matricula = Number(req.params.matricula)
    const { nome, curso, ano } = req.body

    const newAluno = {
        matricula: matricula,
        nome,
        curso,
        ano: parseInt(ano),
    };

    if(!nome || !curso || !ano){
        return res.status(400).send('Dados incompletos. PUT necessita de todos os dados');
    }

    const index = corpoDiscente.findIndex(book => book.matricula === matricula);

    if(index == -1){
        return res.status(404).json({mensagem: 'Livro não encontrado' });
    }

    corpoDiscente[index] = newAluno;
    SalvarEstudante(corpoDiscente);
    res.status(200).json(newAluno);
}
module.exports = { updateAluno }