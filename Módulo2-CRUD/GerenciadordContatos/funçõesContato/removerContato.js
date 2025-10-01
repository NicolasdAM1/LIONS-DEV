import { contatos, exibirMenu } from "../main.js";
import { prompt } from "../pack.js";

export function removerContato(){
    console.clear(); // Saída
    if(contatos.length <= 0){
        console.log("Você não tem contatos adicionados para remover.") // Saída
        prompt("\nRetorne ao MENU... (ENTER)"); // Entrada
        exibirMenu();
    }
    console.log("=".repeat(50) + "LISTA DE CONTATOS" + "=".repeat(50)) // Saída
    console.log("Contatos salvos: " + contatos.length) // Saída
    contatos.forEach(contato => {
        console.log(`ID - ${contato.ID} || [ Nome: ${contato.nome} ] | [ Telefone: ${contato.telefone} ] | [ Email: ${contato.email} ]`); // Saída
    });
    console.log("Digite o ID do contato que deseja remover:") // Saída
    const IDDel = parseInt(prompt("> ", 10)); // Entrada
    if(isNaN(IDDel) || IDDel <= 0 || IDDel > contatos.length){
        console.clear(); // Saída
        console.log("Inválido. Nenhum contato encontrado para o ID digitado."); // Saída
        prompt("Retorne ao MENU... (ENTER)"); // Entrada
        exibirMenu();
    }
    const indiceParaRemover = contatos.findIndex(contato => contato.ID === IDDel);
    if (indiceParaRemover !== -1) {
        contatos.splice(indiceParaRemover, 1);
        console.log("\nContato removido com sucesso!"); // Saída
    } else {
        console.log("\nInválido. Nenhum contato encontrado para o ID digitado."); // Saída
    }
    
    prompt("Retorne ao MENU... (ENTER)"); // Entrada
    exibirMenu();
}