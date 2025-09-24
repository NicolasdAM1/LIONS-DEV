const { LerAluguel, SalvarAluguel } = require('../utils.js')

function removeAluguel(req, res){
    const locadora = LerAluguel()
    const { id } = req.params;
    const index = locadora.findIndex(aluguel => aluguel.id === parseInt(id));

    if (index == -1) {
        return res.status(404).send('Aluguel não encontrado.');
    }

    locadora.splice(index, 1);
    SalvarAluguel(locadora);
    res.status(201).send('Livro removido');

}
module.exports = { removeAluguel }