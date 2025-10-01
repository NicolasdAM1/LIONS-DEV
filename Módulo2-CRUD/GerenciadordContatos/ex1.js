// index.js
let contatos = [                                               
    { id: 1, nome: 'Alice', telefone: '1234-5678', email:             
    'alice@example.com' },
    { id: 2, nome: 'Bob', telefone: '8765-4321', email:
    'bob@example.com' },
    { id: 3, nome: 'Carol', telefone: '5678-1234', email:
    'carol@example.com' }
    ];
    function listarContatos() {   
    contatos.forEach(contato => {        
    console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone:     
    ${contato.telefone}, Email: ${contato.email}`); //Saída
    });                                                                   
    }
    listarContatos(); 

 //Cria uma variável chamada contatos e atribui um array a ele.
 //No array dá a ele uma atribuição de objetos com IDs, nomes, telefones e emails.
 //Cria uma função denominada listarContatos
 //Para cada contato armazenado, escreve o ID, o nome, o telefone e o email.
 //No fim, chama a função listarContatos para dar início a ela.