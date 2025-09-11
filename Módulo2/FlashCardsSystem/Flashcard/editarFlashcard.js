import { Flashcards, decks } from "../main.js";
import { prompt, returnMenu } from "../datapack.js";

export function updateFlashcard(){
    console.clear();
    if(Flashcards.length <= 0){
        console.log("Não há flashcards para serem editados.");
        returnMenu();
        return;
    }

    console.log('-'.repeat(25) + " Flashcards Criados " + '-'.repeat(25));
    Flashcards.forEach(fc => {
        const parentDeck = decks.find(deck => deck.ID === fc.deckID);
        const deckName = parentDeck ? parentDeck.deckname : "Baralho Desconhecido";
        console.log(`ID: ${fc.ID} | Baralho: ${deckName} | Pergunta: ${fc.question}`);
    });

    console.log("\nDigite o ID da flashcard que deseja editar: ");
    const fcIDChoice = prompt("> ");

    const flashcard2Edit = Flashcards.find(fc => fc.ID === parseInt(fcIDChoice));

    if(!flashcard2Edit){
        console.log("ID de flashcard não encontrado.");
        returnMenu();
        return;
    }

    console.clear();
    console.log(`-`.repeat(25) + ` Editando Flashcard ` + `-`.repeat(25));
    console.log(`Você está editando a flashcard com pergunta: "${flashcard2Edit.question}".`);
    console.log("Digite a nova pergunta (ou deixe em branco para manter a atual): ");
    const newQuestion = prompt("> ");
    console.log("Digite a nova resposta (ou deixe em branco para manter a atual): ");
    const newAnswer = prompt("> ");

    if(newQuestion){
        flashcard2Edit.question = newQuestion;
    }
    if(newAnswer){
        flashcard2Edit.answer = newAnswer;
    }

    console.clear();
    console.log("-".repeat(35));
    console.log(`Flashcard de ID: ${flashcard2Edit.ID} atualizada.`);
    console.log(`Novos dados:\nPergunta: ${flashcard2Edit.question}\nResposta: ${flashcard2Edit.answer}`);
    console.log("-".repeat(35));
    returnMenu();
}