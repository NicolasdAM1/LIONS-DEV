const Aluguel = require("../schema/schemaAluguel.js");


async function removeAluguel(req, res){

    try{
        const id = req.params.id

        const locadora = Aluguel.find()
        if(!locadora){
            return res.status(400).send('Aluguel não encontrado.')
        }
        const deletarAluguel = await locadora.findByIdAndDelete(id);
        res.status(200).send('Aluguel removido do banco de dados.',deletarAluguel)

    } catch(error){
        console.error(`Não foi possível deletar o aluguel.`,error)
    }

}
module.exports = { removeAluguel }