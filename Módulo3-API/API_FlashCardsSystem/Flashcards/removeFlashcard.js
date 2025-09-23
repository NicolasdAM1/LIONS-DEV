const { flashcards } = require("./postFlashcard.js")

function removeCards(req, res){
    const id = Number(req.params.id)
    if(flashcards.length <= 0){
        res.status(400).send('A coleção está vazia.')
    }

    const index = flashcards.findIndex(flashcard => flashcard.id === id);

    if(index == -1){
        return res.status(404).json({mensagem: 'Flashcard não encontrado' });
    }

    flashcards.splice(index,1);
    res.status(200).send('Flashcard removido da coleção.');
}

module.exports = { removeCards }