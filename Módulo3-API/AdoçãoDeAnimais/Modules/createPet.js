const Adoption = require('../Schema/petSchema.js')

async function createPet(req, res){
    try {
        const dados = req.body
        if(!dados.Name || !dados.Species || !dados.Age || !dados.Status){
            return res.status(400).send('Todos os campos são necessários.');
        }
        const adoption = Adoption.create( dados )
        res.status(201).send('Cadastro do pet salvo.', adoption);
        
    } catch (err) {
        console.error(err)
        return res.status(404).send(`Erro: ${message.error}`)
        
    }
}
module.exports = { createPet };