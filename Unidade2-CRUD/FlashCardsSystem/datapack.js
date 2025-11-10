import PromptSync from "prompt-sync";
import { menu } from "./main.js";
export const prompt = PromptSync({sigint: true}); 

export function endProcess(){
    console.clear();
    console.log("Saindo do Programa...\n.\n.\n.");
    process.exit();
}

export function returnMenu(){
    prompt("Pressione ENTER para voltar ao MENU...\n> ");
    menu();
}