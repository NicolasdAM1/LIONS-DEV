const { LerEstudante, SalvarEstudante } = require("../utils.js");

function postAluno(req, res){
    const { nome, curso, ano } = req.body
    if(!nome || !curso || !ano){
        res.status(400).send("Dados incompletos. Insira todos os campos necessários.");
    }
    const corpoDiscente = LerEstudante()
    const aluno = {
        matricula: Date.now(),
        nome,
        curso,
        ano: parseInt(ano),
    };

    res.status(201).send("Aluno adicionado ao corpo discente.");
    corpoDiscente.push(aluno)
    SalvarEstudante(corpoDiscente);
    
}
module.exports = { postAluno };
