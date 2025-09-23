const express = require('express');
const { postDeck } = require('./Baralho/postDeck.js');
const { listDeck } = require('./Baralho/listDeck.js');
const { updateDeck } = require('./Baralho/updateDeck.js');
const { removeDeck } = require('./Baralho/removeDeck.js');
const { postCards } = require('./Flashcards/postFlashcard.js');
const { listCards } = require('./Flashcards/listFlashcard.js');
const { updateCards } = require('./Flashcards/updateFlashcard.js');
const { removeCards } = require('./Flashcards/removeFlashcard.js');


const router = express.Router();

router.post('/baralho',postDeck);
router.get('/baralhos',listDeck);
router.put('/baralho/:id',updateDeck);
router.delete('/baralho/:id',removeDeck)

router.post('/flashcard',postCards);
router.get('/flashcards',listCards);
router.put('/baralho/:id',updateCards);
router.delete('/baralho/:id',removeCards)

module.exports = router;