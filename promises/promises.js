function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg)
        }, time)
    });


}

esperaAi('conectando', aleatorio(1, 5))
    .then(resolve => {
        console.log(resolve);
        return esperaAi('Tratando', aleatorio(1, 5));
    })
    .then(resolve => {
        console.log(resolve);
        return esperaAi('mostra na tela', aleatorio(1, 5));
    })
    .then(resolve => {
        console.log(resolve);
    })
    .catch(reject => {
        console.log('ERRO: ' + reject)
    })
