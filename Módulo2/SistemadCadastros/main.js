import { prompt, returnMenu } from "./pack.js";

import { userSignUp } from "./functions.js/adicionarUsuário.js";
import { userList } from "./functions.js/listarUsuários.js";
import { userUpdate } from "./functions.js/editarUsuário.js";
import { userRemove } from "./functions.js/removerUsuário.js";
import { endProcess } from "./pack.js";

export let conta = [];

export function menu(){
    console.clear(); 
    console.log("=".repeat(25) + "Cadastro de Usuário" + "=".repeat(25)); 
    console.log(
          "\n" 
        + "Digite o número de acordo com o que deseja:\n" 
        + "1 - Cadastro Usuário --------------------\n" 
        + "2 - Listar Usuário ----------------------\n" 
        + "3 - Editar Usuário -----------------------\n" 
        + "4 - Remover Usuário ----------------------\n" 
        + "5 - SAIR ---------------------------------\n" 
        + "=".repeat(69)); 
    let opMenu = prompt("> ");
    switch(opMenu){
        case '1':
            userSignUp();
            break;
        case '2':
            userList();
            break;
        case '3':
            userUpdate();
            break;
        case '4':
            userRemove();
            break;
        case '5':
            endProcess();
            break;
        default:
            console.log("Digite um número válido.");
            returnMenu();
    }
}
menu();