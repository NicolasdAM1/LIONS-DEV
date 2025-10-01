import { decks } from "../main.js"
import { returnMenu} from "../datapack.js"

export function listDeck(){
    console.clear();
    if(decks.length <= 0){
        console.log("Não há baralhos criados para serem listados");
        returnMenu();
    }
    console.log("-".repeat(25) + " Baralhos criados " + "-".repeat(25));
    console.log("Nº de Baralhos: " + decks.length);
    decks.forEach(deck => {
        console.log(`ID - ${deck.ID} | Baralho: ${deck.deckname}`);
    });
    console.log("-".repeat(68));
    returnMenu();
}