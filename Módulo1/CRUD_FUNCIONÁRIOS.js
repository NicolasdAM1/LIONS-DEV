const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const funcionarios = [];
  
  function exibirMenu() {
    console.log('1. Cadastrar Funcionário');
    console.log('2. Listar Funcionários');
    console.log('3. Apagar Funcionário');
    console.log('4. Editar Funcionário');
    console.log('5. Maior e Menor Salário');
    console.log('6. Sair');
  }
  
  function mostrarMenu() {
    console.log('\n' + '='.repeat(30));
    exibirMenu();
    console.log('='.repeat(30));
  
    rl.question('Escolha uma opção: ', (opcao) => {
      switch (opcao) {
        case '1': // Se a opção for 1, chama a função cadastrarFuncionario
          cadastrarFuncionario();
          break;
        case '2': // Se a opção for 2, chama a função listarFuncionarios
          listarFuncionarios();
          break;
        case '3': // Se a opção for 3, chama a função apagarFuncionario
          apagarFuncionario();
          break;
        case '4': // Se a opção for 4, chama a função editarFuncionario
          editarFuncionario();
          break;
        case '5': // Se a opção for 5, chama a função maiorSalario
          maiorSalario();
          break;
        case '6': // Se a opção for 6, encerra o programa
          rl.close();
          break;
        default:
          console.log('Opção inválida. Tente novamente.');
          mostrarMenu();
      }
    });
  }
  // Cadastrar Funcionário
  // Função para cadastrar um novo funcionário
  function cadastrarFuncionario() {
    rl.question('Digite o nome do funcionário: ', (nome) => {
      rl.question('Digite o cargo do funcionário: ', (cargo) => {
        rl.question('Digite o salário do funcionário: ', (salario) => {
          if (salario <= 0 || isNaN(salario)) {
            // Verifica se o salário é válido
            console.log('Salário inválido.');
            return cadastrarFuncionario(); // Chama a função novamente para tentar cadastrar (caso o salário seja inválido)
          }
  
          const funcionario = {
            // Cria um objeto funcionário com os dados fornecidos
            nome,
            cargo,
            salario: parseFloat(salario),
          };
  
          funcionarios.push(funcionario); // Adiciona o funcionário (objeto) ao array de funcionários
          console.log('Funcionário cadastrado com sucesso!');
          console.log('Deseja cadastrar outro funcionário? (s/n)');
  
          rl.question('', (resposta) => {
            resposta.toLowerCase() === 's'
              ? cadastrarFuncionario() // Se a resposta for 's', chama a função novamente para cadastrar outro funcionário
              : mostrarMenu(); // Se a resposta for 'n', volta ao menu principal
          });
        });
      });
    });
  }
  
  function listarFuncionarios() {
    if (funcionarios.length === 0) {
      // Verifica se há funcionários cadastrados (verficando se o array está vazio) caso estiver vazio, exibe uma mensagem
      console.log('Nenhum funcionário cadastrado.');
    } else {
      console.log('\n=== LISTA DE FUNCIONÁRIOS ===');
      funcionarios.forEach((funcionario, index) => {
        // Percorre o array de funcionários e exibe os dados de cada um
        // Exibe o índice, nome, cargo e salário formatado com duas casas decimais
        console.log(
          `${index + 1}. Nome: ${funcionario.nome} | Cargo: ${funcionario.cargo} | Salário: R$ ${funcionario.salario.toFixed(2)}`
        );
      });
    }
  
    console.log('\nPressione Enter para voltar ao menu...');
    rl.question('', mostrarMenu);
  }
  
  function apagarFuncionario() {
    if (funcionarios.length === 0) {
      // Verifica se há funcionários cadastrados
      // Se não houver, exibe uma mensagem e volta ao menu
      console.log('Nenhum funcionário cadastrado para apagar.');
      console.log('\nPressione Enter para voltar ao menu...');
      return rl.question('', mostrarMenu);
    }
  
    console.log('\n=== FUNCIONÁRIOS CADASTRADOS ===');
    funcionarios.forEach((funcionario, index) => {
      // Exibe a lista de funcionários cadastrados
      // Percorre o array de funcionários e exibe os dados de cada um
      // Exibe o índice, nome, cargo e salário formatado com duas casas decimais
      console.log(
        `${index + 1}. Nome: ${funcionario.nome} | Cargo: ${funcionario.cargo} | Salário: R$ ${funcionario.salario.toFixed(2)}`
      );
    });
  
    rl.question('\nDigite o número do funcionário que deseja apagar: ', (num) => {
      // Solicita ao usuário o número do funcionário a ser apagado
      const index = parseInt(num, 10) - 1; // Converte o número informado para um índice (subtrai 1, porque os índices começam em 0 e estamos exibindo a lista começando em 1);
  
      if (index >= 0 && index < funcionarios.length) {
        // Verifica se o índice é válido
        const [removido] = funcionarios.splice(index, 1); // Remove o funcionário do array usando splice, que remove o elemento no índice especificado e retorna um array com o elemento removido
        // Exibe uma mensagem de sucesso com o nome do funcionário removido
        console.log(`Funcionário ${removido.nome} foi removido com sucesso!`);
      } else {
        console.log('Número inválido!');
      }
  
      console.log('\nPressione Enter para voltar ao menu...');
      rl.question('', mostrarMenu);
    });
  }
  
  function editarFuncionario() {
    if (funcionarios.length === 0) {
      console.log('Nenhum funcionário cadastrado para editar.');
      console.log('\nPressione Enter para voltar ao menu...');
      return rl.question('', mostrarMenu);
    }
  
    console.log('\n=== FUNCIONÁRIOS CADASTRADOS ===');
    funcionarios.forEach((funcionario, index) => {
      console.log(
        `${index + 1}. Nome: ${funcionario.nome} | Cargo: ${funcionario.cargo} | Salário: R$ ${funcionario.salario.toFixed(2)}`
      );
    });
  
    rl.question('\nDigite o número do funcionário que deseja editar: ', (num) => {
      const index = parseInt(num, 10) - 1;
  
      if (index < 0 || index >= funcionarios.length) {
        console.log('Número inválido!');
        console.log('\nPressione Enter para voltar ao menu...');
        return rl.question('', mostrarMenu);
      }
  
      rl.question('Digite o novo nome do funcionário: ', (nome) => {
        rl.question('Digite o novo cargo do funcionário: ', (cargo) => {
          rl.question('Digite o novo salário do funcionário: ', (salario) => {
            if (salario <= 0 || isNaN(salario)) {
              console.log('Salário inválido.');
              return editarFuncionario();
            }
  
            funcionarios[index] = {
              // Atualiza o funcionário no array com os novos dados [index é o índice do funcionário a ser editado]
              nome,
              cargo,
              salario: parseFloat(salario),
            };
  
            console.log('Funcionário editado com sucesso!');
            console.log('\nPressione Enter para voltar ao menu...');
            rl.question('', mostrarMenu);
          });
        });
      });
    });
  }
  
  function maiorSalario() {
    if (funcionarios.length === 0) {
      console.log('Nenhum funcionário cadastrado.');
      console.log('\nPressione Enter para voltar ao menu...');
      return rl.question('', mostrarMenu);
    }
  
    let maiorSalario = funcionarios[0]; // Inicializa maiorSalario com o primeiro funcionário do array
    let menorSalario = funcionarios[0]; // Inicializa menorSalario com o primeiro funcionário do array
  
    for (let i = 1; i < funcionarios.length; i++) {
      // Percorre o array de funcionários a partir do segundo elemento
      // Compara o salário de cada funcionário com o maior e menor salário encontrados até agora
      if (funcionarios[i].salario > maiorSalario.salario) {
        // Se o salário do funcionário atual for maior que o maiorSalario
        maiorSalario = funcionarios[i]; // Atualiza maiorSalario se encontrar um salário maior
      }
      if (funcionarios[i].salario < menorSalario.salario) {
        // Se o salário do funcionário atual for menor que o menorSalario
        menorSalario = funcionarios[i]; // Atualiza menorSalario se encontrar um salário menor
      }
    }
  
    console.log(
      `Maior salário: R$ ${maiorSalario.salario.toFixed(2)}  Menor salário: R$ ${menorSalario.salario.toFixed(2)}`
    );
    console.log('\nPressione Enter para voltar ao menu...');
    rl.question('', mostrarMenu);
  }
  
  console.log('=== SISTEMA DE GERENCIAMENTO DE FUNCIONÁRIOS ===');
  mostrarMenu(); // Exibe o menu inicial ao iniciar o programa