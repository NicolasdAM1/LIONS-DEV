let baralho = [];

function postDeck(req, res){
    const deck = {
        nome,
        ID: Date.now(),
    };

    baralho.push(deck);
    res.status(201).send('Baralho criado.');
}

module.exports = { postDeck, baralho };