const { LerEstudante, SalvarEstudante } = require("../utils.js")

function listAluno(req, res ){

    const corpoDiscente = LerEstudante();
    if(corpoDiscente.length <= 0){
        res.status(400).send('Não há alunos adicionados.')
    }
    res.status(201).send(corpoDiscente)
}
module.exports = { listAluno }