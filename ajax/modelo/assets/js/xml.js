
const request = (obj) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', (e) => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

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

    // request({
    //     method: 'GET',
    //     url: href,
    // })
    // .then(response => {
    //     carregaResultado(response);
    // })
    // .catch(error => {
    //     console.log(error);
    // });
    async function executa() {
        try {
            const requisita = await request({
                method: 'GET',
                url: href
            })
            carregaResultado(requisita);
        } catch (error) {
            console.log(error);
        }
    }

    executa();
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
}