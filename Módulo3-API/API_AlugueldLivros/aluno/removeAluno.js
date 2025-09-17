const { LerEstudante, SalvarEstudante } = require("../utils.js");

function removeAluno(req, res){
    const matricula = Number(req.params.matricula)
    const corpoDiscente = LerEstudante();
    if(corpoDiscente.length <= 0){
        res.status(400).send('O corpo discente está vazio.')
    }

    const index = corpoDiscente.findIndex(aluno => aluno.matricula === matricula);

    if(index == -1){
        return res.status(404).json({mensagem: 'Aluno não encontrado' });
    }

    corpoDiscente.splice(index,1);
    SalvarEstudante(corpoDiscente);
    res.status(200).send('Aluno removido do corpo discente.');
}
module.exports = { removeAluno }