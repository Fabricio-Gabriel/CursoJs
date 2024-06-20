// const req = require('./mod1');
// const falaNome = req.falaNome;

// const { nome, sobreNome, falaNome } = require('./mod1');

// console.log(nome);
// console.log(falaNome());

const path = require('path');
const mod1 = require('./mod1');
const { Pessoa } = require('./mod1');
const falNome = require('./mod1').falNome;

console.log(mod1.sobreNome);
console.log(mod1.nome);
falNome();

