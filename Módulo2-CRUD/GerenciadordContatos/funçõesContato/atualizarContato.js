import { contatos, exibirMenu } from "../main.js";
import { prompt } from "../pack.js";

export function atualizarContato(){
    console.clear(); // Saída
    if(contatos.length <= 0){
        console.log("Você não tem contatos adicionados para editar.") // Saída
        prompt("\nRetorne ao MENU... (ENTER)"); // Entrada
        exibirMenu();
    }
    console.log("=".repeat(50) + "LISTA DE CONTATOS" + "=".repeat(50)) // Saída
    console.log("Contatos salvos: " + contatos.length) // Saída
    contatos.forEach(contato => {
        console.log(`ID - ${contato.ID} || [ Nome: ${contato.nome} ] | [ Telefone: ${contato.telefone} ] | [ Email: ${contato.email} ]`); // Saída
    });
    console.log("Digite o ID do contato que deseja atualizar:") // Saída
    const IDAtt = parseInt(prompt("> ", 10)); // Entrada
    if(isNaN(IDAtt) || IDAtt <= 0 || IDAtt > contatos.length){
        console.clear(); // Saída
        console.log("Inválido. Nenhum contato encontrado para o ID digitado."); // Saída
        prompt("Retorne ao MENU... (ENTER)"); // Entrada
        exibirMenu();
    }
    const IDEdit = IDAtt - 1;
    const contatoAtual = contatos[IDEdit];

    console.clear(); // Saída
    console.log("=".repeat(50) + " EDIÇÃO DE CONTATO " + "=".repeat(50)); // Saída
    console.log(`ID Atual - ${contatoAtual.ID}`) // Saída
    console.log(`[ Nome atual: ${contatoAtual.nome} ]`); // Saída
    console.log("Digite o novo nome atualizado (deixe em branco para manter o mesmo): "); // Saída
    let nomeAtualizado = prompt("> "); // Entrada
    if(nomeAtualizado.trim() !== ""){
        contatoAtual.nome = nomeAtualizado;
    }
    console.log(`[ Telefone atual: ${contatoAtual.telefone} ]`); // Saída
    console.log("Digite o novo número - com DDD - (deixe em branco para manter o mesmo): "); // Saída
    let telefoneAtualizado = prompt("> "); // Entrada
    if(telefoneAtualizado.trim() !== ""){
        if(isNaN(telefoneAtualizado) || telefoneAtualizado.length < 8 || telefoneAtualizado.length > 11){
            console.log("O TELEFONE deve conter APENAS números e ter um tamanho válido.") // Saída
            prompt("Retorne ao MENU... (ENTER)"); // Entrada
            return exibirMenu();
        }
        const telefoneAtualizadoFormatado = "(" + telefoneAtualizado.substring(0,2) + ")" + telefoneAtualizado.substring(2,7) + "-" + telefoneAtualizado.substring(7);
        contatoAtual.telefone = telefoneAtualizadoFormatado;
    }
    console.log(`[ Email atual: ${contatoAtual.email} ]`); // Saída
    console.log("Digite o novo email (deixe em branco para manter): "); // Saída
    let emailAtualizado = prompt("> "); // Entrada
    if(emailAtualizado.trim() !== ""){
        contatoAtual.email = emailAtualizado;
    }
    console.clear(); // Saída
    console.log("-".repeat(50) + "CONTATO ATUALIZADO" + "-".repeat(50)); // Saída
    console.log(`ID - ${contatoAtual.ID} || [ Nome: ${contatoAtual.nome} ] | [ Telefone: ${contatoAtual.telefone} ] | [ Email: ${contatoAtual.email} ]`) // Saída
    prompt("Pressione ENTER para retornar ao MENU...\n> "); // Entrada
    exibirMenu(); // Saída
}