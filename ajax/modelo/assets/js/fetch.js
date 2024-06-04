

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPag(el);
    }
});

async function carregaPag(el) {
    const href = el.getAttribute('href');

    try {
        const resolve = await fetch(href);
        if(resolve.status !== 200) throw new Error('ERRO 404 NOSSO');

        const html = await resolve.text();
        carregaResultado(html);

    } catch (error) {
        console.error(error);
    }

    // fetch(href)
    //     .then(resolve => {
    //         if(resolve.status !== 200) throw new Error('ERRO 400 NOSSO');
    //         return resolve.text();
    //     })
    //     .then(html => carregaResultado(html))
    //     .catch(error => console.error(error));
}  

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
}