import { menu, decks } from "../main.js"
import { prompt, returnMenu} from "../datapack.js"

export function createFlashcard(){
    console.clear();
    console.log("=".repeat(40) + " CRIAÇÃO DE FLASHCARDS " + "=".repeat(40));
    if(decks.length <= 0){
        console.log("Não há baralhos para adicionar as flashcards. Crie um baralho primeiro.");
        returnMenu();
        return;
    }

    console.log("Digite a pergunta da flashcard: ");
    var fcQuestion = prompt("> ");
    console.log("Digite a resposta da flashcard: ");
    var fcAnswer = prompt("> ");

    console.clear();
    console.log('-'.repeat(25) + " Baralhos Criados " + '-'.repeat(25));
    console.log("Quantidade de Baralhos Criados: " + decks.length);
    decks.forEach(deck => {
        console.log(`ID - ${deck.ID} | Baralho: ${deck.deckname}`);
    });

    console.log("\nDigite o ID do baralho que deseja adicionar a flashcard: ");
    const deckIDChoice = prompt("> ");

    const deck2Add = decks.find(deck => deck.ID === parseInt(deckIDChoice));

    if(!deck2Add){
        console.log("ID de baralho não encontrado. A flashcard não foi adicionada.");
        returnMenu();
        return;
    }

    const newFlashcard = {
        question: fcQuestion,
        answer: fcAnswer,
        deckID: deck2Add.ID, // Armazena o ID do baralho para referência
        ID: Date.now() // ID único para o flashcard
    };

    // Adiciona o flashcard à lista global de flashcards
    Flashcards.push(newFlashcard); 

    console.clear();
    console.log("-".repeat(35));
    console.log(`A flashcard foi adicionada ao baralho: ${deck2Add.deckname}.`);
    console.log(`Dados da flashcard:`);
    console.log(`Pergunta: ${newFlashcard.question}`);
    console.log(`Resposta: ${newFlashcard.answer}`);
    console.log("-".repeat(35));
    returnMenu();
}