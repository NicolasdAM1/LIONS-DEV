const Aluguel = require("../schema/schemaAluguel.js");


async function updateAluguel(req, res){
    const id = req.params.id
    const newAluguel = req.body;
    const novoAluguel = await Aluguel.findByIdAndUpdate(id,newAluguel,{
        new: true,
        runValidators: true,
    });
    if(!novoAluguel){
        return res.status(400).send('Aluguel não encontrado.');
    }

    res.status(200).json(novoAluguel)

}
module.exports = { updateAluguel }