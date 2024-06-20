const nome = 'Fabricio';
const sobreNome = 'Gabriel';

const falaNome = () => {
    console.log(nome, sobreNome);
};

exports.nome = nome;
exports.sobreNome = sobreNome;
exports.falaNome = falaNome;

console.log(exports);