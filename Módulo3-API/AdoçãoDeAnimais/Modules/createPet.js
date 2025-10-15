const Adoption = require('../Schema/petSchema.js')

async function createPet(req, res){
    const dados = req.body
    try {
        const adoption = Adoption.create( dados )
        res.status(201).send('Cadastro do pet salvo.', adoption);
    } catch (err) {
        console.error(err)
        return res.status(404).send(`Erro: ${message.error}`)
    }
}
module.exports = { createPet };