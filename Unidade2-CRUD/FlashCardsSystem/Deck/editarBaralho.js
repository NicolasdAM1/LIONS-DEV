import { decks } from "../main.js"
import { prompt, returnMenu} from "../datapack.js"

export function updateDeck(){
    console.clear();
    if(decks.length <= 0){
        console.log("Não há decks para serem editados.");
        returnMenu();
    }
    console.log('-'.repeat(25) + " Baralhos Criados " + '-'.repeat(25));
    console.log("Quantidade de Baralhos Criados: " + decks.length);
    decks.forEach(deck => {
        console.log(`ID - ${deck.ID} | Baralho: ${deck.deckname}`);
    });
    console.log("Digite o ID do baralho que deseja editar: ");
    const DeckIDUChoice = prompt("> ");
    const deck2Edit = decks.find(deck => deck.ID === parseInt(DeckIDUChoice));
    if(!deck2Edit){
        console.log("ID de baralho não encontrado.");
        returnMenu();
    }

    console.clear();
    console.log('-'.repeat(25) + " Editar Baralho " + '-'.repeat(25));
    console.log(`Você está editando o baralho: ${deck2Edit.deckname}.`);
    console.log("Digite o novo nome: ");
    const newDeckName = prompt("> ");

    deck2Edit.deckname = newDeckName;

    console.clear();
    console.log("-".repeat(35));
    console.log(`Baralho de ID: ${deck2Edit.ID} atualizado.`);
    console.log(`Novos dados:\nNome: ${deck2Edit.deckname}`);
    console.log("-".repeat(35));
    returnMenu();
}