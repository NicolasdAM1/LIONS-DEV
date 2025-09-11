
var A = 80000
var B = 200000
const tA = 0.03
const tB = 0.015
var year = 0;


console.log(`Poulação do país A no ano zero: ${A}`)
console.log(`Poulação do país B no ano zero: ${B}`)

while(A <= B){
    A = A + A * tA;
    B = B + B * tB;
    year++

    console.log(`Ano ${year}: A = ${Math.floor(A)} habitantes. || B = ${Math.floor(B)} habitantes.`)
}
console.log(`${year} anos necessários para a população de A ultrapassar a população de B`)