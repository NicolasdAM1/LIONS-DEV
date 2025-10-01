const Aluno = require("../schema/schemaAluno.js");

async function removeAluno(req, res){

    try{
        const id = req.params.id

        const corpoDiscente = Aluno.find()
        if(!corpoDiscente){
            return res.status(400).send('Aluno não encontrado.')
        }
        const deletarAluno = await corpoDiscente.findByIdAndDelete(id);
        res.status(200).send('Aluno removido do corpo discente',deletarAluno)

    } catch(error){
        console.error(`Não foi possível remover o aluno do corpo discente.`,error)
    }
}
module.exports = { removeAluno }