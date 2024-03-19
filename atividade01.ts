// Definindo uma classe abstrata chamada Pessoa
class Pessoa {
    // Definindo o construtor da classe Pessoa com três parâmetros: nome, email e cargo
    constructor(
        protected nome: string, // Atributo protegido que armazena o nome da pessoa
        protected email: string, // Atributo protegido que armazena o email da pessoa
        protected cargo: string // Atributo protegido que armazena o cargo da pessoa
    ) { }

    // Método abstrato para mostrar os dados da pessoa
    mostrarDados(): void {
        // Imprime uma linha indicando o início dos dados da pessoa
        console.log('--------------Dados da Pessoa-------------');

        // Imprime o nome da pessoa
        console.log(`Nome: ${this.nome}`);

        // Imprime o email da pessoa
        console.log(`Email: ${this.email}`);

        // Imprime o cargo da pessoa
        console.log(`Cargo: ${this.cargo}`);

        // Imprime uma linha indicando o fim dos dados da pessoa
        console.log('------------------------------------------------');
    }
}

// Definição da classe Projeto para representar os projetos em andamento
class Projeto {
    // O construtor da classe Projeto recebe os parâmetros necessários para inicializar seus atributos
    constructor(
        private nome: string, // Nome do projeto (atributo privado)
        private descricao: string, // Descrição do projeto (atributo privado)
        private equipe: Pessoa[], // Lista de membros da equipe do projeto (atributo privado)
        private progresso: number, // Progresso do projeto (atributo privado)
        private dataInicio: Date,// Lista data de inicio do projeto
        private dataTermino: Date// Lista data de termino do projeto
    ) { }

    // Método para mostrar os dados do projeto
    mostrarDados(): void {
        // Imprime uma linha indicando o início dos dados do projeto
        console.log('--------------Dados do Projeto-------------');

        // Imprime o nome do projeto
        console.log(`Nome: ${this.nome}`);

        // Imprime a descrição do projeto
        console.log(`Descrição: ${this.descricao}`);


        // Imprime os membros da equipe do projeto
        console.log('Equipe:');
        // Loop para percorrer a lista de membros da equipe
        for (let i = 0; i < this.equipe.length; i++) {
            // Chama o método mostrarDados() de cada membro da equipe para exibir seus dados
            this.equipe[i].mostrarDados();
        }

        // Imprime o progresso do projeto
        console.log(`Progresso: ${this.progresso}%`);

        // Data de termino prevista
        console.log(`Data de inicio:  ${this.dataInicio.toLocaleDateString()}`);

        // Data de termino prevista
        console.log(`Data de termino:  ${this.dataTermino.toLocaleDateString()}`);
       
        // Imprime uma linha indicando o fim dos dados do projeto
        console.log('------------------------------------------------');
    }  
}


// Definição da classe Tarefa para representar as tarefas individuais de um projeto
// Definição da classe Tarefa para representar as tarefas individuais de um projeto
class Tarefa {
    // O construtor da classe Tarefa recebe os parâmetros necessários para inicializar seus atributos
    constructor(
        private descricao: string, // Descrição da tarefa (atributo privado)
        private responsavel: Pessoa, // Responsável pela tarefa (atributo privado)
        private prazo: Date, // Prazo para conclusão da tarefa (atributo privado)
        private status: string // Status da tarefa (atributo privado)
    ) { }

    // Método para mostrar os dados da tarefa
    mostrarDados(): void {
        // Imprime uma linha indicando o início dos dados da tarefa
        console.log('--------------Dados da Tarefa-------------');

        // Imprime a descrição da tarefa
        console.log(`Descrição: ${this.descricao}`);

        // Imprime o responsável pela tarefa
        console.log('Responsável:');
        // Chama o método mostrarDados() do responsável para exibir seus dados
        this.responsavel.mostrarDados();

        // Imprime o prazo para conclusão da tarefa, formatando a data com toLocaleDateString()
        console.log(`Prazo: ${this.prazo.toLocaleDateString()}`);

        // Imprime o status da tarefa
        console.log(`Status: ${this.status}`);

        // Imprime uma linha indicando o fim dos dados da tarefa
        console.log('------------------------------------------------');
    }
}
// Definição da classe Comunicacao para facilitar a comunicação entre os membros da equipe
class comunicacao {
    // O construtor da classe Comunicacao recebe os parâmetros necessários para inicializar seus atributos
    constructor(
        private membros: Pessoa[], // Lista de membros da equipe (atributo privado)
       
    ) { }

    // Método para mostrar os dados de comunicação
    mostrarDados(): void {
        // Imprime uma linha indicando o início dos dados de comunicação
        console.log('---------------Dados de Comunicção dos membros---------------')

        // Mostrar membros
        console.log('Membros:');
        // Loop sobre a lista de membros para mostrar os dados de cada um
        for (let i = 0; i < this.membros.length; i++) {
            this.membros[i].mostrarDados();
        }

       
        // Imprime uma linha indicando o fim dos dados de comunicação
        console.log('------------------------------------------------');
    }
}


// Agora podemos utilizar essas classes para implementar o sistema de gerenciamento de projetos
// Instanciar projetos, atribuir tarefas, facilitar a comunicação interna, etc.
// Criando instâncias de pessoas
const pessoa1 = new Pessoa('Alice', 'alice@email.com', 'Desenvolvedora');
const pessoa2 = new Pessoa('Bob', 'bob@email.com', 'Designer');
const pessoa3 = new Pessoa('Carlos', 'carlos@email.com', 'Gerente de Projeto');
const pessoa4 = new Pessoa('Joana', 'joana@email.com', 'Analista de Marketing');
const pessoa5 = new Pessoa('Eduardo', 'eduardo@email.com', 'Designer Gráfico');

// Criando uma lista de membros da equipe para um projeto
const equipeProjeto1 = [pessoa1, pessoa2, pessoa3];
const equipeProjeto2 = [pessoa4, pessoa5, pessoa3];



// Criando uma instância de projeto
const projeto1 = new Projeto('Projeto XYZ', 'Desenvolvimento de um novo aplicativo', equipeProjeto1, 50, new Date('01-01-'), new Date('10-12-2002'));

const projeto2 = new Projeto('ProjectX', 'Projeto de filme', equipeProjeto2, 50 , new Date('2025-02-31'), new Date('2026-02-30'))

// Criando instâncias de tarefas
const tarefa1 = new Tarefa('Implementar página de login', pessoa1, new Date('2024-03-10'), 'Em andamento');
const tarefa2 = new Tarefa('Criar protótipo da interface', pessoa2, new Date('2024-03-20'), 'Pendente');



// Criando uma lista de membros da equipe para comunicação interna
const equipeComunicacao = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5];



// Criando uma instância de comunicação interna
const comunicacaoInterna = new comunicacao(equipeComunicacao);

// Testando a exibição dos dados
projeto1.mostrarDados(); // Mostra os dados do projeto
console.log('\n');
tarefa1.mostrarDados(); // Mostra os dados da primeira tarefa
console.log('\n');
tarefa2.mostrarDados(); // Mostra os dados da primeira tarefa
console.log('\n');
// Testando a exibiçãoda nova equipe 
console.log('-----------nova equipe---------------')
projeto2.mostrarDados();// Mostra os dados da equipe de marketing
console.log('\n');
comunicacaoInterna.mostrarDados(); // Mostra os dados de comunicação interna
console.log('\n');



