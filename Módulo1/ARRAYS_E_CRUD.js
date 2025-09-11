//push adiciona elementos
//unshift adiciona o primeiro elemento
//pop remove o último elemento
//shift remove o primeiro elemento
//slice seleciona quais objetos selecionar
//includes verifica se o índice existe
//indexof verifica em qual índice está o objeto
//lenght verifica o tamanho do array

//CRUD --> Create, Read, Update and Delete 

 /*const minhaMesa = ['Nicolas', 'Otávio', 'Luan', 'Lucas'];
 console.log(`Meu nome é ${minhaMesa[0]} e meus colegas são ${minhaMesa.slice(1,4)}`)
 minhaMesa.shift
 console.log(minhaMesa.shift())
 minhaMesa.push('colega')
 console.log(minhaMesa)*/


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var média;
let notas = []

console.log('====CÁLCULO DAS MÉDIAS====')

rl.prompt()
  rl.question('Digite a primeira nota: ',(prova1) => {
    rl.question('Digite a segunda nota: ',(prova2) => {
      rl.question('Média necessária para a aprovação: ',(mín) => {
      notas.push(prova1, prova2)
      média = (parseFloat(notas[0]) + parseFloat(notas[1])) / 2;
      console.log(`A média das notas foi: ${média}`)
      if(média >= mín){
        console.log('Situação: APROVADO')
      }else{
        console.log('Situação: REPROVADO')
      }
      process.exit()
      })
    })
  })


