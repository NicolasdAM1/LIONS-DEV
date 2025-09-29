const Aluno = require("../schema/schemaAluno")


async function listAluno(req, res ){

    const corpoDiscente = await Aluno.find();

    if(!corpoDiscente){
        res.status(400).send('Não há alunos adicionados.')
    }

    res.status(200).send(corpoDiscente)
}
module.exports = { listAluno }