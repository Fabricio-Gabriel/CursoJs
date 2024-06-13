class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const p1 = new Pessoa('Fabricio', 19);
alert(p1.nome + p1.idade);
console.log(p1.nome);