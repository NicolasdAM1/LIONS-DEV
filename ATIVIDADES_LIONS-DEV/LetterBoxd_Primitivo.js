const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const acervo = [];

function inícioMenu(){
    console.log('1 - Adicionar Filme ao Acervo');
    console.log('2 - Listar Filmes no Acervo');
    console.log('3 - Apagar Filmes do Acervo')
    console.log('4 - Editar Filmes no Acervo');
    console.log('5 - Maior e Menor Duração dos Filmes no Acervo')
    console.log('6 - Sair')
}

function mostrar_inícioMenu(){
    console.log('\n' + '='.repeat(30))
    inícioMenu()
    console.log('\n' + '='.repeat(30))
}

console.log(mostrar_inícioMenu())

rl.question('Escolha uma opção: ', (opção) => {
    switch(opção){
        case '1':
            adicionarFilme();
            break;
        case '2':
            listarFilme()
            break;
        case '3':
            apagarFilme()
            break;
        case '4':
            editarFilme()
            break;
        case '5':
            duraçãoFilme()
            break;
        case '6':
            rl.close();
            break;
        default:
            console.log('Opção Inválida. Tente novamente.');
            mostrar_inícioMenu();
        }
})

function adicionarFilme(){
    rl.question('Digite o nome do filme: ',(nome) => {
        rl.question('Digite o gênero do filme: ',(gênero) => {
            rl.question('Digite o tempo de duração do filme (em minutos): ',(duração) => {
                if(duração <= 0 || isNaN(duração)){
                    console.log('Tempo inválido.')
                    return adicionarFilme()
                }
                acervo.push({
                    nome,
                    gênero,
                    duração: parseInt(duração)
                })
                console.log('Filme adicionado ao Acervo !')
                console.log('Deseja adicionar outro filme ao Acervo ? (s/n)')

                rl.question('',(resposta) => {
                    resposta.toLowerCase() === 's'
                    ? adicionarFilme()
                    : mostrar_inícioMenu
                })
            })
        })
    })
}

function listarFilme(){
    if(filme.lenght === 0){
        console.log('Nenhum filme salvo no acervo.')
    
    }else{
        console.log('\n===FILMES ACERVADOS===')
        acervo.forEach((filme, index) => {
            console.log(`${index + 1}. Nome: ${acervo.nome} | Gênero: ${acervo.gênero} | Duração: ${acervo.duração}`)
        })
    }
    console.log('\nPressione Enter para voltar ao menu...')
    rl.question("",mostrar_inícioMenu)
}