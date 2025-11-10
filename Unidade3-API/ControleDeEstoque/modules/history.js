const Transaction = require('../schemas/schemaTransition.js');

async function history(req, res) {
    try {
        const transactions = await Transaction.find().sort({ date: -1 });
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Erro ao buscar transações:', error);
        res.status(500).send('Erro ao buscar transações.');
    }
}

module.exports = { history };
