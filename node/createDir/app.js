const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
// ];
// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);
async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    const transformaArray = JSON.parse(dados);
    transformaArray.forEach(el => {
        console.log(el);
    });
}

leArquivo(caminhoArquivo);





