// class Pessoa {
//     constructor(nome, cor) {
//         this.nome = nome;
//         this.cor = cor;
//     }

//     alteraCor(color) {
//         this.cor = color;
//     }
    
// }

// exports.Pessoa = Pessoa;

// let nome = 'Fabrico';
// let sobreNome = 'Gabriel'
// function falNome() {
//     console.log('a');
// }

// exports.sobreNome = sobreNome;
// exports.nome = nome;
// exports.falNome = falNome;
module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;    
    }

    latir() {
        console.log(`${this.nome} está latindo`);
    }
}
