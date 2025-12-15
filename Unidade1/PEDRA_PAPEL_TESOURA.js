const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var opções = ['pedra', 'papel', 'tesoura'];
var userChoice = []
var computerChoice = []
var result = []

let randomfucker = Math.random() * 3;
randomnumber = Math.floor(randomfucker)
computerChoice = opções[randomnumber]

console.log("======Bem-vindo(a) ao 'Ultimate Rock, Paper n' Scissors Championship'======") 
rl.question("Escolha a arma:\n'Pedra', 'Papel' ou 'Tesoura': ",(userChoice) => {
    userChoice = userChoice.toLowerCase()
    if(userChoice == computerChoice){
        console.log('----------------Empate !-----------------')
        console.log(`Escolha do usuário: ${userChoice}`)
        console.log(`Escolha do computador: ${computerChoice}`)
    }else if(userChoice == 'pedra' && computerChoice == 'papel'){
        console.log('-----Você perdeu !-----')
        console.log(`Escolha do usuário: ${userChoice}`)
        console.log(`Escolha do computador: ${computerChoice}`)
    }else if(userChoice == 'papel' && computerChoice == 'tesoura'){
        console.log('-----Você perdeu !-----')
        console.log(`Escolha do usuário: ${userChoice}`)
        console.log(`Escolha do computador: ${computerChoice}`)
    }else if(userChoice == 'tesoura' && computerChoice == 'pedra'){
        console.log('-----Você perdeu !-----')
        console.log(`Escolha do usuário: ${userChoice}`)
        console.log(`Escolha do computador: ${computerChoice}`)
    }else if(userChoice == 'papel' && computerChoice == 'pedra'){
        console.log('-------Você ganhou !-------')
        console.log(`Escolha do usuário: ${userChoice}`)
        console.log(`Escolha do computador: ${computerChoice}`)
    }else if(userChoice == 'tesoura' && computerChoice == 'papel'){
        console.log('-------Você ganhou !-------')
        console.log(`Escolha do usuário: ${userChoice}`)
        console.log(`Escolha do computador: ${computerChoice}`)
    }else if(userChoice == 'pedra' && computerChoice == 'tesoura'){
        console.log('-------Você ganhou !-------')
        console.log(`Escolha do usuário: ${userChoice}`)
        console.log(`Escolha do computador: ${computerChoice}`)
    }else{
        console.log('Opção inválida. Tente novamente')
        analfabeto()
    }
    process.exit()
})

