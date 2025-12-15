const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*var result;

rl.question('Qual tabuada você deseja saber: ',(tabuada) => {
    console.log('Tabuada do ' + tabuada)
    for(let i = 0; i <= 100; i++){
        result = parseInt(tabuada) * i
        console.log(`${tabuada} x ${i} = ${result}`)
        process.exit()
    }
})*/

var somaPares = 0,
    somaÍmpares = 0,
    totalPares = 0,
    totalÍmpares = 0,
    médiaPares,
    médiaÍmpares;

for (let i = 0; i <= 999; i++) {
  if (i % 2 == 0) {
    somaPares += i;
    totalPares++;
  } else {
    somaÍmpares += i;
    totalÍmpares++;
  }
  médiaPares = somaPares / totalPares;
  médiaÍmpares = somaÍmpares / totalÍmpares;
}
console.log(`---Pares---:\nTotal: ${totalPares}\nSoma: ${somaPares}\nMédia: ${médiaPares}`);
console.log('=============')
console.log(`--Ímpares--:\nTotal: ${totalÍmpares}\nSoma: ${somaÍmpares}\nMédia: ${médiaÍmpares}`);
process.exit()


