import { conta, menu } from "../main.js";
import { prompt, returnMenu } from "../pack.js";


export function userSignUp(){
    console.clear();
    console.log("-".repeat(20) + "ADICIONE UM NOVO USUÁRIO" + "-".repeat(20));
    console.log("Digite o nome de usuário: ");
    var username = prompt("> ");
    let usernumbers = [];
    while(true){
        console.log("Digite o telefone do usuário (com DDD): ");
    var usernumber = prompt("> ");
    if(isNaN(usernumber) || usernumber.length < 11){
        console.log("O TELEFONE deve conter APENAS números e ter um TAMANHO válido.");
        continue;
    }
    const telefoneFormatado = "(" + usernumber.substring(0,2) + ")" + usernumber.substring(2,7) + "-" + usernumber.substring(7);
    usernumbers.push(telefoneFormatado);
    console.log("Deseja adicionar mais um telefone ao usuário ? (s/n):");
    const addMore = prompt("> ");
    if(addMore !== 's'){
        break;
    }
    }
    
    console.log("Digite o email do usuário: ");
    var usermail = prompt("> ");
    const existingUser = conta.find(user => user.usermail === usermail);
    existingUser ? true : false;
    if(existingUser){
        console.clear();
        console.log("O email digitado já pertence a outro usuário.");
        prompt("Pressione ENTER para continuar...\n> ");
        userSignUp();
    }
    const user = {
        ID: Math.floor(Date.now() / 6000),
        username: username,
        usernumbers: usernumbers,
        usermail: usermail,
    };
    conta.push(user);
    console.clear();
    console.log("-".repeat(80));
    console.log(`USUÁRIO: ${username}, de TELEFONE: ${usernumbers} e de EMAIL '${usermail}' cadastrado.\nSeu ID de usuário é: ${user.ID}`);
    console.log("-".repeat(80));
    returnMenu();
}