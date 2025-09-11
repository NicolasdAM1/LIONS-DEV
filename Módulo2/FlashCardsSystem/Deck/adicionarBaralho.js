import { decks } from "../main.js"
import { prompt, returnMenu} from "../datapack.js"

export function createDeck(){
    console.clear();
    console.log("-".repeat(20) + "CRIE UM NOVO BARALHO" + "-".repeat(20));
    console.log("Digite o nome do novo baralho");
    var deckname = prompt("> ");
    const deck = {
        deckname,
        ID: Date.now(),
    };
    decks.push(deck);
    console.clear();
    console.log("-".repeat(60));
    console.log(`O baralho: ${deckname}, de ID único: ${deck.ID}, foi criado.`);
    console.log("-".repeat(60));
    returnMenu();
}