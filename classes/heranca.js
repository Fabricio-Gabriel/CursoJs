class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`O dispositivo ${this.nome} já está ligado!`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`O dispositivo ${this.nome} já está desligado!`)
            return;
        }

        this.ligado = false;
    }
}


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }


    ligarWifi() {
        if(this.temWifi) {
            console.log("O wifi está ligado");
            return;
        }
        this.temWifi = true;
    }
}

const s1 = new Smartphone("Iphone", "Preto", "7");
const t1 = new Tablet("Ipad", false);

t1.ligarWifi();
console.log(t1);

