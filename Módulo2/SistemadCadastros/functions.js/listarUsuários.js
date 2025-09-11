import { conta } from "../main.js";
import { returnMenu } from "../pack.js";


export function userList(){
    console.clear();
    if(conta.length <= 0){
        console.log("Não há usuários cadastrados para serem listados no momento.");
        returnMenu();
    }
    console.log("=".repeat(50) + "LISTA DE USUÁRIOS" + "=".repeat(50));
    console.log("Usuários Cadastrados: " + conta.length)
    conta.forEach(user => {
        console.log(`ID - ${user.ID} || [ Usuário: ${user.username} ] | [ Telefone(s): ${user.usernumbers} ] | [ Email: ${user.usermail} ]`);
    });
    returnMenu();
}