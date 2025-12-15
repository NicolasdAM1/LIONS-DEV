const Aluguel = require("../schema/schemaAluguel.js");


async function postAluguel(req, res){

    const { idLivro, idAluno } = req.body
    if(!idLivro || !idAluno){
        return res.status(400).send('Dados incompleto. Preencha todos os campos necessários.')
    }

    const aluguel = new Aluguel({
        idLivro,
        idAluno
    });

    const SaveAluguel = await aluguel.save();
    res.status(201).send('Aluguel criado.',SaveAluguel);
}
module.exports = { postAluguel }