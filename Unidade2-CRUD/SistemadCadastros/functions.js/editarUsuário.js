import { conta, menu } from "../main.js";
import { prompt, returnMenu } from "../pack.js";

export function userUpdate(){
    console.clear();
    if(conta.length <= 0){
        console.log("Não há usuários cadastrados para serem editados neste momento.");
        returnMenu();
    }
    console.log("=".repeat(50) + "USUÁRIOS CADASTRADOS" + "=".repeat(50));
    console.log("Nº de Usuários Cadastrados: " + conta.length)
    conta.forEach(user => {
        console.log(`ID - ${user.ID} || [ Usuário: ${user.username} ] | [ Telefone(s): ${user.usernumbers} ] | [ Email: ${user.usermail} ]`);
    });
    console.log("=".repeat(120));

    console.log("Digite o ID do usuário que você deseja editar: ")
    const idParaEditar = prompt("> ");
    const idNumerico = parseInt(idParaEditar);
    const usuarioParaEditar = conta.find(user => user.ID === idNumerico);
    if (!usuarioParaEditar) {
        console.log("ID de usuário não encontrado.");
        returnMenu();
        return;
    }
    console.clear();
    console.log("-".repeat(20) + "EDITAR USUÁRIO" + "-".repeat(20));
    console.log(`Você está editando o usuário: ${usuarioParaEditar.username}`);

    console.log(`Nome (${usuarioParaEditar.username}): `)
    const novoNome = prompt("> ");
    console.log(`Email (${usuarioParaEditar.usermail}): `)
    const novoEmail = prompt("> ");
    const existingUser = conta.find(user => user.usermail === novoEmail);
    existingUser ? true : false;
    if(existingUser){
        console.clear();
        console.log("O email digitado já pertence a outro usuário.");
        prompt("Pressione ENTER para continuar...\n> ");
        userUpdate();
    }
    
    const novosTelefones = [];
    while (true) {
        console.log(`Telefone (com DDD) [pressione ENTER para manter o(s) telefone(s) atual(is)]: `)
        const telefone = prompt("> ");
        
        if (telefone === '') {
            novosTelefones.push(...usuarioParaEditar.usernumbers);
            break;
        }
        if (isNaN(telefone) || telefone.length < 11) {
            console.log("O TELEFONE deve conter APENAS números e ter um TAMANHO válido.");
            continue;
        }
        const telefoneFormatado = "(" + telefone.substring(0, 2) + ")" + telefone.substring(2, 7) + "-" + telefone.substring(7);
        novosTelefones.push(telefoneFormatado);

        console.log("Deseja adicionar mais um telefone? (s/n): ")
        const adicionarMais = prompt("> ").toLowerCase();
        if (adicionarMais !== 's') {
            break;
        }
    }
    usuarioParaEditar.username = novoNome || usuarioParaEditar.username;
    usuarioParaEditar.usermail = novoEmail || usuarioParaEditar.usermail;
    usuarioParaEditar.usernumbers = novosTelefones;

    console.clear();
    console.log("=".repeat(80));
    console.log(`Usuário com ID ${usuarioParaEditar.ID} atualizado !`);
    console.log(`Novos dados: Usuário: ${usuarioParaEditar.username}, Telefone(s): ${usuarioParaEditar.usernumbers.join(', ')}, Email: ${usuarioParaEditar.usermail}`);
    console.log("=".repeat(80));

    returnMenu();
}