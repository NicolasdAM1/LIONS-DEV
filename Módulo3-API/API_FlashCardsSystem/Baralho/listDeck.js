const { baralho } = require("./postDeck")

function listDeck(req, res){
    if(baralho.length <= 0){
        res.status(400).send('A coleção está vazia.')
    }
    res.status(201).send(baralho)
}

module.exports = { listDeck }