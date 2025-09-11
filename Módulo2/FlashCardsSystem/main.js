import { createDeck } from "./Deck/adicionarBaralho.js";
import { listDeck } from "./Deck/listarBaralho.js";
import { updateDeck } from "./Deck/editarBaralho.js";
import { removeDeck } from "./Deck/removerBaralho.js";
import { prompt, endProcess, returnMenu } from "./datapack.js";
import { createFlashcard } from "./Flashcard/adicionarFlashcard.js";
import { listFlashcard } from "./Flashcard/listarFlashcard.js";
import { updateFlashcard } from "./Flashcard/editarFlashcard.js";
import { removeFlashcard } from "./Flashcard/removerFlashcard.js";

export let decks = [];
export let Flashcards = [];

export function menu(){
    console.clear();
    console.log('='.repeat(40) + " Gerenciamento de Flashcards " + '='.repeat(40));
    console.log(
        "Digite o número correspondente a opção desejada:\n"
        + "1 - Adicionar Baralho\n"
        + "2 - Listar Baralho\n"
        + "3 - Editar Baralho\n"
        + "4 - Remover Baralho\n"
        + "5 - Criar Flashcard\n"
        + "6 - Listar Flashcards\n"
        + "7 - Editar Flashcard\n"
        + "8 - Remover Flashcard\n"
        + "0 - Sair\n"
    );
    let choice = prompt("> ");
    switch(parseInt(choice)){
        case 1:
            createDeck();
            break;
        case 2:
            listDeck();
            break;
        case 3:
            updateDeck();
            break;
        case 4:
            removeDeck();
            break;
        case 5:
            createFlashcard();
            break;
        case 6:
            listFlashcard();
            break;
        case 7:
            updateFlashcard();
            break;
        case 8:
            removeFlashcard();
            break;
        case 0:
            endProcess();
            break;
        default:
            console.log("Opção inválida.");
            returnMenu();
            break;
    }
} 
menu();