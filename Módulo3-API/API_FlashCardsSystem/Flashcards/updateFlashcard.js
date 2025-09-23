const { Flashcards } = require("./postFlashcard");

function updateCards(req, res){
    
    if(Flashcards.length <= 0){
        res.status(400).send('A coleção está vazia.')
    }

    const id = Number(req.params.id)
    const { cardname, pergunta, resposta } = req.body

    const newCard = {
        id: id,
        cardname,
        pergunta,
        resposta,
    };

    if(!id || !cardname || !pergunta || !resposta){
        return res.status(400).send('Dados incompletos. PUT necessita de todos os dados');
    }

    const index = Flashcards.findIndex(flashcard => flashcard.id === id);

    if(index == -1){
        return res.status(404).json({mensagem: 'Flashcard não encontrada' });
    }

    Flashcards[index] = newCard;
    res.status(200).json(newCard);
}
module.exports = { updateCards }