const { LerAluguel } = require("../utils.js")

function listAluguel(req, res){
    const locadora = LerAluguel();
    if(locadora.length <= 0){
        return res.status(400).send('Nenhum aluguel em andamento');
    }

    res.status(201).send(locadora);
}
module.exports = { listAluguel };