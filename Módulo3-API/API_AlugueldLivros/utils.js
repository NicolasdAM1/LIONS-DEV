const fs = require('fs');

function SalvarDados(PATH, dados) {
    try {
        const dadosJson = JSON.stringify(dados, null, 2);
        fs.writeFileSync(PATH, dadosJson);
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
    }
}

function LerDados(PATH) {
    if (!fs.existsSync(PATH)) {
        console.log('Arquivo de dados não encontrado. Criando um novo...');
        return [];
    }
    try {
        const dadosJson = fs.readFileSync(PATH, 'utf-8');
        return JSON.parse(dadosJson);
    } catch (error) {
        console.error('Erro ao ler ou analisar o arquivo JSON:', error);
        return [];
    }
}

const DBLivros = "./db/livros.json"
const DBEstudantes = "./db/estudantes.json" 
const DBAluguel = "./db/aluguel.json"

function SalvarLivro(dados){
    SalvarDados(DBLivros, dados)
}
function SalvarEstudante(dados){
    SalvarDados(DBEstudantes, dados)
}

function SalvarAluguel(dados){
    SalvarDados(DBAluguel, dados)
}

function LerLivro(){
    return LerDados(DBLivros)
}

function LerEstudante(){
    return LerDados(DBEstudantes)
}
function LerAluguel(){
    return LerDados(DBAluguel)
}


module.exports = {
    SalvarLivro,
    SalvarEstudante,
    SalvarAluguel,
    LerLivro,
    LerEstudante,
    LerAluguel,
};