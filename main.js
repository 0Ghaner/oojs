const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    ano: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log('Acelerando...');
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    ano: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log('Acelerando...');
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('Acelerando...');
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "Natan"
const idade = 26
const ehMaiorDeIdade = true
const conhecimentos = ["JavaScript", "HTML", "CSS"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}