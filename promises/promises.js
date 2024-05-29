function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time)
    });


}

esperaAi('Frase 1', aleatorio(1, 3))
    .then(resolve => {
        console.log(resolve);
        return esperaAi('frase 2', aleatorio(1, 3));
    })
    .then(resolve => {
        console.log(resolve);
        return esperaAi('frase 3', aleatorio(1, 3));
    })
    .then(resolve => {
        console.log(resolve);
    })
    .catch();

