const Aluguel = require("../schema/schemaAluguel.js");


async function listAluguel(req, res){

    const locadora = await Aluguel.find();

    if(!locadora){
        return res.status(400).send('Nenhum aluguel em andamento');
    }

    res.status(201).send(locadora);
}
module.exports = { listAluguel };