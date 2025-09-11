const { Console } = require("console");
const readline = require("readline");
const randomnumber = (Math.floor(Math.random() * 100) + 100);
var rodadas = 0;
var limite = 5;

console.log(randomnumber);
console.log(
  '-------------------JOGO DA ADIVINHAÇÃO-------------------\n       O JOGO VAI DE 0 A 15. DIGITE "100" PARA SAIR       \n              VOCÊ TEM APENAS 5 TENTATIVAS!              \n========================================================='
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt() -
  rl.on("line", (input) => {
    if (input == 100) {
      console.log("Obrigado por jogar.\nSaindo....");
      process.exit();
    }
    if (input == randomnumber) {
      rodadas++;
      if (rodadas == 1) {
        console.log(
          `UAU !!!\nMuito bem, você acertou em somente ${rodadas} rodada`
        );
      } else {
        console.log("Muito bem. Você acertou em " + rodadas + " rodadas");
      }
      process.exit();
    } else {
      console.log("Errou, tente novamente.");
      rodadas++;
      limite--;
      if (limite > 1) {
        console.log(`Você ainda tem ${limite} rodadas`);
      } else {
        console.log(`Você ainda tem ${limite} rodada`);
      }
      if (limite == 0) {
        console.log("As tentativas acabaram. Mais sorte na próxima. ;)");
        process.exit();
      }
    }
  });
