export const nome = 'Fabricio';
export const sobreNome = 'Gabriel';
export const idade = 19;

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }
}