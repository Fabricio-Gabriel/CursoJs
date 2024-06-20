// // const req = require('./mod1');
// // const falaNome = req.falaNome;

// // const { nome, sobreNome, falaNome } = require('./mod1');

// // console.log(nome);
// // console.log(falaNome());

// const path = require('path');
// const mod1 = require('./mod1');
// const { Pessoa } = require('./mod1');
// const { falNome } = require('./mod1');

// const p1 = new Pessoa('Fabricio', 'Branco');
// p1.alteraCor('pardo');
// console.log(p1);
// console.log(mod1.sobreNome);
// console.log(mod1.nome);
// falNome();

const Cachorro = require('./mod1');
const path = require('path');

const cachorro = new Cachorro('bruccy');
console.log(cachorro.latir());

console.log(__filename);
console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..', 'axios'));

