

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPag(el);
    }
});

function carregaPag(el) {
    const href = el.getAttribute('href');

    fetch(href)
        .then(resolve => {
            if(resolve.status !== 200) throw new Error('ERRO 400 NOSSO');
            return resolve.text();
        })
        .then(html => carregaResultado(html))
        .catch(error => console.error(error));
}  

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
}