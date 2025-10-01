const Aluno = require("../schema/schemaAluno.js");


async function postAluno(req, res){
    const { Matricula, Nome, Curso, Ano } = req.body
    if(!Matricula || !Nome || !Curso || !Ano){
        res.status(400).send("Dados incompletos. Insira todos os campos necessários.");
    }

    const aluno = new Aluno({
        Matricula,
        Nome,
        Curso,
        Ano,
    });

    const SaveAluno = await aluno.save();
    res.status(201).send("Aluno adicionado ao corpo discente.",SaveAluno);
    
}
module.exports = { postAluno };
