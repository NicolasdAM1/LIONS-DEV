const Aluno = require("../schema/schemaAluno.js");

async function updateAluno(req, res){
    
    const id = req.params.id
    const newAluno = req.body;
    const novoAluno = await Aluno.findByIdAndUpdate(id,newAluno,{
        new: true,
        runValidators: true,
    });
    if(!novoAluno){
        return res.status(400).send('Aluno não encontrado.');
    }

    res.status(200).send('Aluno atualizado.')
}
module.exports = { updateAluno }