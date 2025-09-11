const express = require('express');
const app = express();
const port = 3000;
const a = 1;
const b = 5;

console.log(new Date())

app.use(express.json());

app.post('/soma',(req, res) => {
    res.send(`Soma: ${a} + ${b} = ${a + b}\n`);
})

app.post('/subtracao',(req, res) => {
    res.send(`Subtração: ${a} - ${b} = ${a - b}\n`);
})

app.post('/multiplicacao',(req, res) => {
    res.send(`Multiplicação: ${a} x ${b} = ${a * b}\n`);
})

app.post('/divisao',(req, res) => {
    res.send(`Divisão: ${a} : ${b} = ${a / b}\n `);
})

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
}) 
