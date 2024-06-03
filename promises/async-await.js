function aleatorio(min=0, max=3) {
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


async function executa() {
    try {
        const espera1 = await esperaAi('Fase 1', aleatorio());
        console.log(espera1);

        const espera2 = await esperaAi('Fase 2', aleatorio());
        console.log(espera2);

        const espera3 = await esperaAi('Fase 3', aleatorio());
        console.log(espera3);

        const termina = await esperaAi('terminando', aleatorio());
        console.log(termina);

    } catch (error) {
        console.log('ERRO: ', error);
    }
}

executa();



// esperaAi('Fase 1', aleatorio())
//     .then(resolve => {
//         console.log(resolve);
//         return esperaAi('Fase 2', aleatorio())
//     })
//     .then(resolve => {
//         console.log(resolve);
//         return esperaAi('Fase 3', aleatorio())
//     })
//     .then(resolve => {
//         console.log(resolve)
//         return resolve;
//     })
//     .then(resolve => {
//         console.log('Terminamos na fase: ', resolve);
//     })
//     .catch(e => {
//         console.log(e);
//     });