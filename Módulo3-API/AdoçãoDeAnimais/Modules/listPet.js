const Adoption = require("../Schema/petSchema.js");

async function listPet(req, res){
    try {
        const pets = await Adoption.find(req.query)
    if(pets <= 0){
        return res.status(404).send("Nenhum animal cadastrado.")
    }
    res.status(201).send(pets)

    } catch (err) {
        console.error(err)
        res.status(500).send(`Não foi possível listar os animais.`)
    }
    
}
module.exports = { listPet }