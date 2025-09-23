
function updateDeck(req, res){
    if(baralho.length <= 0){
        res.status(400).send('A coleção está vazia.')
    }

    const id = Number(req.params.id)
    const { name } = req.body

    const newDeck = {
        id: id,
        name,
    }

    if(!name){
        return res.status(400).send('Dados incompletos.')
    }
    const index = baralho.findIndex(deck => listDeck.id === id)

    if(index == -1){
        return res.status(404).json({mensagem: 'Baralho não encontrado' });
    }

    baralho[index] = newDeck;
    res.status(200).json(newDeck)
}

module.exports = { updateDeck }