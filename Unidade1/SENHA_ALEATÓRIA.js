const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt()

console.log('======GERADOR-DE-SENHA-ALEATÓRIA======')

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇÁÀÃÂÉÊÍÓÕÔÚÜ0123456789!@#$%&*-_?abcdefghijklmnopqrstuvwxyzáàãâéêíóõôúü';
let senha = "";
rl.question("Digite o comprimento da senha (até 50 caracteres): ", (resposta) => {
  const tam = parseInt(resposta, 10);
  if (isNaN(tam)) {
    console.log("Nenhum número inserido ou caracteres máximo ultrapassado");
    rl.close();
  } else {
    for (let i = 0; i < tam; i++) {
      const caracterAleatório = Math.floor(Math.random() * caracteres.length)
      senha += caracteres.charAt(caracterAleatório).trim()
    }
    console.log(`Senha aleátoria gerada: ${senha}`);
    process.exit();
} 
});
