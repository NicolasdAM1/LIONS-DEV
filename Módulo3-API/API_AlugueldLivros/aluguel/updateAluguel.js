const { LerAluguel, SalvarAluguel } = require('../utils.js')

function updateAluguel(req, res){
    const locadora = LerAluguel();
    const { id } = req.params;
    const { dataDevolver } = req.body;

    const aluguel = locadora.find(a => a.id === parseInt(id));

    if(!aluguel){
        return res.status(401).send('Nenhum aluguel com esse ID encontrado')
    }

    aluguel.dataDevolver = dataDevolver || aluguel.dataDevolver;
    res.json(aluguel)
}
module.exports = { updateAluguel }