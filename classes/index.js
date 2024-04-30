class Pessoa{
    
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    mostraNome() {
        console.log(`${this.nome} ${this.sobrenome}`)
    }

    falar() {
        console.log(`${this.nome} está falando!`)
    }

    
}

const p1 = new Pessoa("Fabricio", "Gabriel");
p1.mostraNome();
p1.falar();

