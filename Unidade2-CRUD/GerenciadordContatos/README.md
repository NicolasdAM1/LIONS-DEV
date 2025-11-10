# Gerenciador de Contatos
## Por: Nicolas de Antoni Mendes

# Variáveis Declaradas:
## (main.js){
- contatos: Essa é a variável principal sistema. É um array (uma lista) onde todos os contatos são armazenados. O export permite que essa variável seja acessada e modificada por outros arquivos, como as funções que adicionam, listam, atualizam e removem contatos.
- opMenu: Esta variável é declarada dentro da função exibirMenu. Ela armazena a opção digitada pelo usuário no menu principal. O valor lido é convertido para um número inteiro e usado na estrutura switch para decidir qual função executar.
   ## }

## (listarContatos.js){
- Não há variáveis locais declaradas neste arquivo. A função listarContatos apenas utiliza o array global contatos e o loop forEach para exibir as informações de cada contato no console.
   ## }
    
## (adicionarContato.js){
- nome: Variável que armazena o nome do contato que o usuário digita.
- telefone: Armazena o número de telefone digitado pelo usuário. Antes de ser armazenado no objeto contato, o código verifica se ele é um número e se tem um tamanho válido.
- telefoneFormatado: Uma string formatada do número de telefone. Ela pega o valor da variável telefone e o formata no padrão (DD)DDDDD-DDDD para melhor visualização.
- email: Armazena o endereço de e-mail do contato que o usuário insere.
- contato: Este é um objeto que armazena todas as informações de um único contato. Ele possui as propriedades ID, nome, telefone e email, que são preenchidas com os valores que o usuário digita.
   ## }

## (atualizarContato.js){
- IDAtt: Armazena o ID do contato que o usuário deseja atualizar. O valor é lido do prompt e convertido para um número inteiro.
- IDEdit: É o índice do contato no array contatos. Ele é calculado subtraindo 1 do IDAtt (já que arrays em JavaScript começam no índice 0).
- contatoAtual: Uma referência ao objeto de contato específico que será editado.
- nomeAtualizado: Armazena o novo nome digitado pelo usuário.
- telefoneAtualizado: Armazena o novo número de telefone digitado pelo usuário.
- telefoneAtualizadoFormatado: Uma string formatada do novo número de telefone, similar à variável telefoneFormatado do arquivo adicionarContato.js.
- emailAtualizado: Armazena o novo e-mail digitado pelo usuário.
   ## }

## (removerContato.js){
- IDDel: Armazena o ID do contato que o usuário deseja remover. O valor é lido do prompt e convertido para um número inteiro.
- indiceParaRemover: Armazena o índice do contato no array contatos. O método findIndex é usado para encontrar o índice com base no ID fornecido.
   ## }
