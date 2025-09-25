const { LerEstudante, SalvarEstudante } = require("../utils.js");

function postAluno(req, res){
    const { Matricula, Nome, Curso, Ano } = req.body
    if(!Matricula || !Nome || !Curso || !Ano){
        res.status(400).send("Dados incompletos. Insira todos os campos necessários.");
    }
    const corpoDiscente = LerEstudante()
    const aluno = {
        Matricula,
        Nome,
        Curso,
        Ano: parseInt(Ano),
    };

    res.status(201).send("Aluno adicionado ao corpo discente.");
    corpoDiscente.push(aluno)
    SalvarEstudante(corpoDiscente);
    
}
module.exports = { postAluno };
