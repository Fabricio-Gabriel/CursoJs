// fetch('pessoas.json')
//     .then(resolve => resolve.json())
//     .then(json => {
//         carregaElementos(json);
//     })
//     .catch(error => console.log(error));

axios('pessoas.json')
    .then(resolve => carregaElementos(resolve.data));

function carregaElementos(json) {
    const resultado = document.querySelector('.resultado');
    const table = document.createElement('table');
    

    for(let pessoa of json) {
        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.innerHTML = pessoa.nome;
        tr.appendChild(tdNome);

        const tdIdade = document.createElement('td');
        tdIdade.innerHTML = pessoa.idade;
        tr.appendChild(tdIdade);

        const tdSal = document.createElement('td');
        tdSal.innerHTML = pessoa.salario;
        tr.appendChild(tdSal);

        table.appendChild(tr);
    }

    resultado.appendChild(table);
}