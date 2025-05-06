function Pessoa (nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    // getters e setters
    this.getSalario = function() {
        return `O salário de ${this.nome} é ${_salario}`;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome); // Chama o construtor Pessoa com o contexto atual (this)
}

const funcionario1 = new Funcionario("João", "Desenvolvedor", 5000);
const pessoa = new Pessoa("Maria");

funcionario1.dizOi(); // "João diz olá"
funcionario1.dizCargo(); // "Desenvolvedor"

funcionario1.setSalario('mil'); // Isso não altera o valor de _salario dentro do Funcionario

console.log(funcionario1.getSalario()); // 6000