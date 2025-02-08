"use strict";
class Conta {
    constructor() {
        // Private: Ele não pode ser acessado ou modificado fora da classe
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log(`Infelizmente seu Limite reprovado `);
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteAfiliado() {
        this.solicitarLimite(950);
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
console.log('================================');
// console.log(fulano);
const joao = new BancoAfiliado();
joao.limiteAfiliado();
console.log(joao);
