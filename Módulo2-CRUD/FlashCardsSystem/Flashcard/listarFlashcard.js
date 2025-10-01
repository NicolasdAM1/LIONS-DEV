import { decks, Flashcards } from "../main.js";
import { prompt, returnMenu } from "../datapack.js";

export function listFlashcard(){
    console.clear();
    if(decks.length <= 0){
        console.log("Não há baralhos criados.");
        returnMenu();
        return;
    }

    console.log('-'.repeat(25) + " Baralhos Criados " + '-'.repeat(25));
    decks.forEach(deck => {
        console.log(`ID - ${deck.ID} | Baralho: ${deck.deckname}`);
    });

    console.log("\nDigite o ID do baralho cujas flashcards deseja listar: ");
    const deckIDChoice = prompt("> ");

    const deck2List = decks.find(deck => deck.ID === parseInt(deckIDChoice));

    if(!deck2List){
        console.log("ID de baralho não encontrado.");
        returnMenu();
        return;
    }

    const flashcardsInDeck = Flashcards.filter(flashcard => flashcard.deckID === deck2List.ID);

    if(flashcardsInDeck.length <= 0){
        console.clear();
        console.log(`Não há flashcards no baralho '${deck2List.deckname}'.`);
        returnMenu();
        return;
    }

    console.clear();
    console.log(`-`.repeat(20) + ` Flashcards do Baralho: ${deck2List.deckname} ` + `-`.repeat(20));
    flashcardsInDeck.forEach(flashcard => {
        console.log(`ID: ${flashcard.ID}`);
        console.log(`  Pergunta: ${flashcard.question}`);
        console.log(`  Resposta: ${flashcard.answer}`);
        console.log(`-`.repeat(50));
    });

    returnMenu();
}