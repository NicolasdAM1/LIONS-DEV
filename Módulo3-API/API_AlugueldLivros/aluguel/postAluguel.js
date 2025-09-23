const { lerAluguel, salvarAluguel } = require('../utils.js')

function postAluguel(req, res){
    const { idLivro, idAluno } = req.body
    if(!idLivro || !idAluno){
        return res.status(400).send('Dados incompleto. Preencha todos os campos necessários.')
    }

    const locadora = lerAluguel();
    
    const aluguel = {
        id: Date.now(),
        idLivro,
        idAluno,
        dataAluguel: new Date().toISOString(),
        dataDevolver: null,
    };

    res.status(201).send('Aluguel criado.');
    locadora.push(aluguel);
    salvarAluguel(locadora);
}
module.exports = { postAluguel }