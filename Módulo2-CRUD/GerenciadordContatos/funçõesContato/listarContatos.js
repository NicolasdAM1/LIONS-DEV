import { contatos, exibirMenu } from "../main.js";
import { prompt } from "../pack.js";
import { adicionarContato } from "./adicionarContato.js";

export function listarContatos() {
    console.clear(); // Saída
    if(contatos.length <= 0){
        console.log("Você não tem contatos adicionados para listar.") // Saída
        prompt("\nRetorne ao MENU... (ENTER)"); // Entrada
        exibirMenu();
    }
    console.log("=".repeat(50) + "LISTA DE CONTATOS" + "=".repeat(50)) // Saída
    console.log("Contatos salvos: " + contatos.length) // Saída
    contatos.forEach(contato => {
    console.log(`ID - ${contato.ID} || [ Nome: ${contato.nome} ] | [ Telefone: ${contato.telefone} ] | [ Email: ${contato.email} ]`); // Saída
} );
    prompt("Pressione ENTER para retornar ao MENU...\n> "); // Entrada
    exibirMenu();
    }