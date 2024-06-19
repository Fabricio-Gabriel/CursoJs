import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const quantidade = document.querySelector('.qtd-caracter');
const chkMaiuscula = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        quantidade.value, 
        chkMaiuscula.checked,
        chkMinuscula.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    
    
    return senha;
}