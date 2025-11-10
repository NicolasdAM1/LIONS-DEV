import { contatos, exibirMenu } from "../main.js";
import { prompt } from "../pack.js";

export function adicionarContato(){
    console.clear(); // Saída
    console.log("-".repeat(20) + "ADICIONE UM NOVO CONTATO" + "-".repeat(20)); // Saída
    var nome = prompt("Nome: "); // Entrada
    var telefone = prompt('Telefone (com DDD): '); // Entrada
    if(isNaN(telefone) || telefone.length < 11){
        console.log("O TELEFONE deve conter APENAS números e ter um TAMANHO válido.") // Saída
        prompt("Retorne ao MENU... (ENTER)"); // Entrada
        exibirMenu();
    }
    const telefoneFormatado = "(" + telefone.substring(0,2) + ")" + telefone.substring(2,7) + "-" + telefone.substring(7);
    var email = prompt('E-mail: '); // Entrada
    const contato = {
        ID: contatos.length + 1,
        nome: nome,
        telefone: telefoneFormatado,
        email: email,
    };
    contatos.push(contato);
    console.clear() // Saída
    console.log("-".repeat(80)); // Saída
    console.log(`CONTATO: ${nome}, de TELEFONE: ${telefoneFormatado} e EMAIL: '${email}' adicionado com sucesso !`); // Saída
    console.log("-".repeat(80)); // Saída
    prompt("Pressione ENTER para voltar ao MENU...\n> "); // Entrada
    exibirMenu();
}