const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//INTERMINADO
//TODO EVERYTHING !!!

const estoque = [];

function menu(){
    console.log('Bem vindo(a) ao Estoque. O que você deseja ?\n')
    console.log('1 - Adicionar Produto');
    console.log('2 - Listar Produtos');
    console.log('3 - Remover Produtos')
    console.log('4 - Editar Produtos');
    console.log('5 - Quantidade de Produtos')
    console.log('6 - Sair')
}

function mostrarMenu(){
    console.log('\n' + '='.repeat(45))
    menu()
    console.log('='.repeat(45))
}

console.log(mostrarMenu())
rl.question('Escolha uma opção: ', (opção) => {
    switch(opção){
        case '1':
            adicionarProduto();
            break;
        case '2':
            listarProduto()
            break;
        case '3':
            removerProduto()
            break;
        case '4':
            editarProduto()
            break;
        case '5':
            quantidadeProduto()
            break;
        case '6':
            rl.close();
            break;
        default:
            console.log('Opção Inválida. Tente novamente.');
            mostrarMenu();
        }
})

function adicionarProduto(){
    rl.question('Digite o nome do produto: ',(nome) => {
        rl.question('Digite o ID do produto: ',(ID) => {
            rl.question('Digite a quantidade do produto em estoque: ',(quantidade) => {
                if(quantidade <= 0 || isNaN(quantidade)){
                    console.log('Quantidade inválida.')
                    return adicionarProduto()
                }
                estoque.push({
                    nome,
                    ID,
                    quantidade: parseInt(quantidade)
                })
                console.log('Produto adicionado ao estoque.')
                console.log('Deseja adicionar outro produto ao estoque ? (s/n)')

                rl.question('',(resposta) => {
                    resposta.toLowerCase() === 's'
                    ? adicionarProduto()
                    : mostrarMenu()
                })
            })
        })
    })
}

function listarProduto(){
    if(estoque.length === 0){
        console.log('Nenhum produto salvo no estoque.')
        console.log('Realocando para o início...')
        menu()
    }else{
        console.log('====PRODUTOS NO ESTOQUE====')
        estoque.forEach((estoque, index) => {
            console.log(`${index + 1}. ID: ${estoque.ID} | Nome: ${estoque.nome} | Quantidade: ${estoque.quantidade}`)
        })
    }
    console.log('\nPressione Enter para voltar ao menu...')
    rl.question("",mostrarMenu)
}

function removerProduto(){
    if(estoque.lenght === 0){
        console.log("Nenhum produto no estoque para remover.")
        console.log('\nPressione Enter para voltar ao menu...')
        return rl.question("",mostrarMenu)
    }
    console.log('====PRODUTOS ESTOCADOS====');
    produtos.forEach((estoque, index) => {
        console.log(`${index + 1}. ID: ${estoque.ID} | Nome: ${estoque.nome} | Quantidade: ${estoque.quantidade}`)
    })
    rl.question('\nDigite o código do produto que deseja apagar: ',(cod) => {
        const index = parseInt(cod, 10) - 1;
        if(index >= 0 && index < estoque.lenght){
            const [removido] = estoque.splice(index, 1)
            console.log(`Produto ${removido.ID} | ${removido.nome} removido com sucesso.`)
        }else{
            console.log('Número inválido.')
        }
        console.log('\nPressione Enter para voltar ao menu...')
        rl.question("", mostrarMenu)
    })
}

function editarProduto(){
    if(estoque.lenght === 0){
        console.log("Nenhum produto no estoque para remover.")
        console.log('\nPressione Enter para voltar ao menu...')
        return rl.question("",mostrarMenu)
    }
    console.log('====PRODUTOS ESTOCADOS====');
    produtos.forEach((estoque, index) => {
        console.log(`${index + 1}. ID: ${estoque.ID} | Nome: ${estoque.nome} | Quantidade: ${estoque.quantidade}`)
    })
    rl.question('\nDigite o código do produto que deseja apagar: ',(cod) => {
        const index = parseInt(cod, 10) - 1;
        if(index < 0 || index >= estoque.length){
            console.log('Número inválido.')
            console.log('\nPressione Enter para voltar ao menu...')
            return rl.question('',mostrarMenu)
        }
        rl.question('Digite o novo ID do produto: ',(ID) => {
            rl.question('Digite o novo nome do produto: ',(nome) => {
                rl.question('Digite a nova quantidade do produto: ',(quantidade) => {
                    if(quantidade <= 0 || isNaN(quantidade)){
                        console.log('Quantidade inválida.')
                        return editarProduto()
                    }
                    estoque[index] = {
                        ID,
                        nome,
                        quantidade: parseInt(quantidade)
                    }
                    console.log('Produto editado com sucesso.')
                    console.log('\nPressione Enter para voltar ao menu...')
                    rl.question('',mostrarMenu)
                })
            })
        })
    })
}
