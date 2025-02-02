/* 
    ### O que é uma classe ? ###
    >> Uma classe armazena as caracteristicas e as ações que esse objeto vai possuir.
    >> Ou seja conjunto de atributos e metodos.
*/

type Status = "ABERTO" | "FECHADO"

class Loja {
    // Atributos da nossa classe.
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria
    }

    criarLoja(): void {
        console.log(`Loja ${this.nome}, categoria ${this.categoria}`)
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string {

        pedidos.map(pedido => console.log(`Saindo novo pedido: ${pedido}`))

        return `Pedido na mesa: ${mesa}`
    }

    mudarStatus(status: Status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA COM SUCESSO!")
        } else {
            console.log("LOJA FECHADA")
        }
    }
}

const redBurguer = new Loja('Red Burguer', 'lanches');

// console.log(redBurguer.nome)
// redBurguer.criarLoja()
// const retornoLoja = redBurguer.emitirPedido(50, "Suco gelado", "Hamburguer duplo", "Coca 2Lts")
// console.log(retornoLoja)

redBurguer.mudarStatus("ABERTO")

