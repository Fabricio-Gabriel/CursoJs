export function rand(min=48, max=58) {
    return Math.floor(Math.random() * (max - min) + min);
}

const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

const geraMinuscula = () => String.fromCharCode(rand(97, 123));

const geraNum = () => String.fromCharCode(rand());

const simbolos = '.,;~^[]{}!@#$%¨&*()_-+=';

const geraSimbolo = () => {
    return simbolos[rand(0, simbolos.length)];
}

export default function geraSenha(qtd, maisc, minusc, nums, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    

    for(let i = 0; i < qtd; i++) {
        maisc && senhaArray.push(geraMaiuscula());
        minusc && senhaArray.push(geraMinuscula());
        nums && senhaArray.push(geraNum());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}




