function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('ERRO: bad value');

        setTimeout(() => {
            resolve(msg);
        }, time)
    });


}

esperaAi('conexão com BD', aleatorio(1, 3))
    .then(resolve => {
        console.log(resolve);
        return esperaAi('Buscando no BD', aleatorio(1, 3));
    })
    .then(resolve => {
        console.log(resolve);
        return esperaAi('Trata dados do BD', aleatorio(1, 3));
    })
    .then(resolve => {
        console.log(resolve);
        return esperaAi('Exibe dados na tela', 1000);
    })
    .then(resolve => {
        console.log(resolve);
    })
    .catch(reject => {
        console.log(reject);
    });

