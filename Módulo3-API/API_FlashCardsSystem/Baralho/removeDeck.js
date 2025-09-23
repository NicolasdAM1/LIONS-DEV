const { baralho } = require("./postDeck")

function removeDeck(req, res){
    const id = Number(req.params.id)
    if(baralho.length <= 0){
        res.status(400).send('A coleção está vazia.')
    }

    const index = baralho.findIndex(deck => deck.id === id);

    if(index == -1){
        return res.status(404).json({mensagem: 'Livro não encontrado' });
    }

    baralho.splice(index,1);

    let flashcardsRestantes = flashcards.filter(
        (flashcards) => flashcards.id !== index.id
    )
    flashcards.splice(0, flashcards.length);
    flashcards.push(flashcardsRestantes)
    

    res.status(200).send('Baralho removido da coleção.');
}

module.exports = { removeDeck }
