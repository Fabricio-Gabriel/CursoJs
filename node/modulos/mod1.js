class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

let nome = 'Fabrico';
let sobreNome = 'Gabriel'
function falNome() {
    console.log('a');
}

exports.sobreNome = sobreNome;
exports.nome = nome;
exports.falNome = falNome;

