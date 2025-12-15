import { prompt } from "./pack.js";
import { adicionarContato } from "./funçõesContato/adicionarContato.js";
import { listarContatos } from "./funçõesContato/listarContatos.js";
import { atualizarContato } from "./funçõesContato/atualizarContato.js";
import { removerContato } from "./funçõesContato/removerContato.js";

export let contatos = [];

export function exibirMenu(){
    console.clear(); // Saída
    console.log("=".repeat(20) + "CONTATOS" + "=".repeat(20)); // Saída
    console.log(
          "Bem-vindo(a) ao Gerenciador de Contatos\n" // Saída
        + "Digite o número de acordo com o que deseja:\n" // Saída
        + "1 - Adicionar Contato --------------------\n" // Saída
        + "2 - Listar Contatos ----------------------\n" // Saída
        + "3 - Editar Contato -----------------------\n" // Saída
        + "4 - Remover Contato ----------------------\n" // Saída
        + "5 - SAIR ---------------------------------\n" // Saída
        + "=".repeat(48)); // Saída
    let opMenu = prompt("> "); // Entrada
    opMenu = parseInt(opMenu);
    switch(opMenu){
        case 1:
            adicionarContato();
            break;
        case 2:
            listarContatos();
            break;
        case 3:
            atualizarContato();
            break;
        case 4:
            removerContato();
            break;
        case 5:
            console.clear(); // Saída
            console.log(".\n.\n.") // Saída
            process.exit();
            break;
        default:
            console.log("Digite um número válido."); // Saída
            exibirMenu();
            return;
    }
}
exibirMenu(); // Saída 