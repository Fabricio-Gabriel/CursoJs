function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        };

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - resolvi a promise');
        }, time)
    });


}



const promises = [
    esperaAi('Promise 1', aleatorio(1, 5)),
    esperaAi('Promise 2', aleatorio(1, 5)),
    esperaAi('Promise 3', aleatorio(1, 5)),
];


const baixaPagina = () => {
    const emCache = true;

    if (!emCache) {
        return Promise.reject('Página não foi carregada');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
};

baixaPagina()
    .then(resolve => {
        console.log(resolve);
    })
    .catch(e => console.log(e));

// Promise.all(promises)
//     .then(valor => {
//         console.log(valor)
//     })
//     .catch(error => {
//         console.log(error)
//     })


// Promise.race(promises)
// .then(valor => {
//     console.log(valor)
// })
// .catch(error => {
//     console.log(error)
// })
//promise.all promise.race promise.resolve promise.reject