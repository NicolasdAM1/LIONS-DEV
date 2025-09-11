import { decks } from "../main.js"
import { prompt, returnMenu} from "../datapack.js"

export function removeDeck(){
    console.clear();
    if(decks.length <= 0){
        console.log("Não há decks para serem criados para serem removidos.");
        returnMenu();
    }
    console.log('-'.repeat(25) + " Baralhos Criados " + '-'.repeat(25));
    console.log("Quantidade de Baralhos Criados: " + decks.length);
    decks.forEach(deck => {
        console.log(`ID - ${deck.ID} | Baralho: ${deck.deckname}`);
    });
    console.log("=".repeat(120));
    
    console.log("Digite o ID do baralho que deseja excluir: ");
    const DeckIDRChoice = prompt("> ");
    const deck2Remove = decks.findIndex(deck => deck.ID === parseInt(DeckIDRChoice));
    if(deck2Remove !== -1){
        console.clear();
        console.log('-'.repeat(35) + `\nBaralho de ID: ${DeckIDRChoice} removido\n` + '-'.repeat(35));
        decks.splice(deck2Remove, 1);
    }else{
        console.clear();
        console.log("=".repeat(80));
        console.log(`Erro: Usuário com ID ${deck2Remove} não encontrado.`);
        console.log("=".repeat(80));
    }
    
    returnMenu();
}