class Conta {
    // Private: Ele não pode ser acessado ou modificado fora da classe

    private limite: number = 450;

    private aumentarLimite(quantidade: number) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`)
        } else {
            console.log(`Infelizmente seu Limite reprovado `)
        }
    }

    protected solicitarLimite(quantidade: number) {
        return this.aumentarLimite(quantidade);
    }

    solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade)
        } else {
            return false
        }
    }
}

class BancoAfiliado extends Conta {
    limiteAfiliado(){
        this.solicitarLimite(950)
    }
}

const fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
console.log('================================')
// console.log(fulano);

const joao = new BancoAfiliado();
joao.limiteAfiliado()

console.log(joao)