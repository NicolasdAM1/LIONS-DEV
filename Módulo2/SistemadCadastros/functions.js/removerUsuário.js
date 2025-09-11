import { conta, menu } from "../main.js";
import { prompt, returnMenu } from "../pack.js";

export function userRemove(){
    console.clear();
    if (conta.length <= 0) {
        console.log("Não há usuários cadastrados para serem removidos neste momento.");
        returnMenu();
    }
    console.log("=".repeat(50) + "USUÁRIOS CADASTRADOS" + "=".repeat(50));
    console.log("Nº de Usuários Cadastrados: " + conta.length);
    conta.forEach(user => {
        console.log(`ID - ${user.ID} || [ Usuário: ${user.username} ] | [ Telefone(s): ${user.usernumbers.join(', ')} ] | [ Email: ${user.usermail} ]`);
    });

    console.log("=".repeat(120));

    const idParaRemover = prompt("Digite o ID do usuário que você deseja remover: ");
    const idNumerico = parseInt(idParaRemover);

    const indiceUsuario = conta.findIndex(user => user.ID === idNumerico);

    if (indiceUsuario !== -1) {
        const usuarioRemovido = conta.splice(indiceUsuario, 1);
        console.clear();
        console.log("=".repeat(80));
        console.log(`Usuário com ID ${idNumerico} (${usuarioRemovido[0].username}) removido !`);
        console.log("=".repeat(80));
    } else {
        console.clear();
        console.log("=".repeat(80));
        console.log(`Erro: Usuário com ID ${idNumerico} não encontrado.`);
        console.log("=".repeat(80));
    }

    returnMenu();
}