let flashcards = [];

function postCards(req, res){
    const { id, namecard, pergunta, resposta } = req.body
    if(! id || !namecard || !pergunta || !resposta){
        res.status(400).send("Dados incompletos. Insira todos os campos necessários.");
    }

    const flashcard = {
        id,
        idC: Date.now(),
        namecard,
        pergunta,
        resposta: (resposta),
    };

    res.status(201).send("Flashcard adicionado ao baralho.");
    flashcards.push(flashcard)
    
}
module.exports = { postCards };
