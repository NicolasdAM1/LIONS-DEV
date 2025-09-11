import { Flashcards, decks } from "../main.js";
import { prompt, returnMenu } from "../datapack.js";

export function removeFlashcard(){
    console.clear();
    if(Flashcards.length <= 0){
        console.log("Não há flashcards para serem removidas.");
        returnMenu();
        return;
    }

    console.log('-'.repeat(25) + " Flashcards Criados " + '-'.repeat(25));
    Flashcards.forEach(fc => {
        const parentDeck = decks.find(deck => deck.ID === fc.deckID);
        const deckName = parentDeck ? parentDeck.deckname : "Baralho Desconhecido";
        console.log(`ID: ${fc.ID} | Baralho: ${deckName} | Pergunta: ${fc.question}`);
    });

    console.log("\nDigite o ID da flashcard que deseja excluir: ");
    const fcIDChoice = prompt("> ");

    const flashcardIndex2Remove = Flashcards.findIndex(fc => fc.ID === parseInt(fcIDChoice));

    if(flashcardIndex2Remove !== -1){
        const removedFlashcard = Flashcards[flashcardIndex2Remove];
        Flashcards.splice(flashcardIndex2Remove, 1);
        console.clear();
        console.log('-'.repeat(35) + `\nFlashcard de ID: ${removedFlashcard.ID} removida com sucesso.\n` + '-'.repeat(35));
    } else {
        console.clear();
        console.log("=".repeat(80));
        console.log(`Erro: Flashcard com ID ${fcIDChoice} não encontrada.`);
        console.log("=".repeat(80));
    }
    
    returnMenu();
}