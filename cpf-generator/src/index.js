// import { nome as nome2, sobreNome, idade, soma, Pessoa } from './modulo1.js';
// import Pessoa, { nome, sobreNome, idade, soma} from './modulo1.js';

// // console.log(nome2, sobreNome, idade);

// // console.log(soma(2, 1));

// // const p1 = new Pessoa('Alo', 'Galera');

// // console.log(p1.nome, p1.sobreNome);

// const p1 = new Pessoa('Fabricio', 'Gabriel');
// console.log(soma(2, 1));
// alert(p1.nome);

import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() {
    const cpfGerado = document.querySelector('.cpf-gerado');
    const CPF = new GeraCPF();

    cpfGerado.innerHTML = CPF.geraNovoCpf();
    
})();

