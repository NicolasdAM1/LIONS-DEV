
function removeAluguel(req, res){
    const { id } = req.params;
    const index = locadora.findIndex(a => a.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send('Aluguel não encontrado.');
    }

    locadora.splice(index, 1);
    res.status(204).send();

}
module.exports = { removeAluguel }