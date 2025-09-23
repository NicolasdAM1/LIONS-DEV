const { flashcards } = require('./postFlashcard')

function listCards(req, res){
    if(flashcards.length <= 0){
        res.status(400).send('A coleção está vazia.')
    }
    res.status(201).send(flashcards)
}

module.exports = { listCards }