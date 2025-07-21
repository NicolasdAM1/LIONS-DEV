const readline = require('readline');

var result;

console.log("======CALCULADORA======\n----- 1 - ADIÇÃO ------\n---- 2 - SUBTRAÇÃO ----\n-- 3 - MULTIPLICAÇÃO --\n----- 4 - DIVISÃO -----\n---- 5 - PARA SAIR ----\n=======================")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt()
  rl.question('Digite o primeiro número: ',(A) => {
    rl.question('Selecione a operação desejada: ',(op) => {
      rl.question('Digite o segundo número: ',(B) => {
        switch(op){
          case '1':
            result = parseFloat(A) + parseFloat(B);
            break;
          case '2':
            result = A - B;
            break;
          case '3':
            result = A * B;
            break;
          case '4':
            if(B == 0){
              console.log('ERRO!\nNão existe divisão por zero.')
            }
            result = A / B;
            break;
          case '5':
            console.log("Saindo da calculadora.")
            process.exit();
          default:
            console.log("Você não escolheu um operador válido")
        }
        console.log(`Resultado: ${result}`)
      })
    })
  })
