// CAso de uso de um JOGO

class Jogo {
    private servidor: string;
    private id: string = "1234"

    constructor(servidor: string) {
        this.servidor = servidor
    }

    // Metodo GET = Para pegar o valor nao inves de acessar diretamente a propriedade
    get getServidorIP() {
        console.log(`== METODO GET ==`)
        return this.servidor
    }

    // Metodo SET = Passar / Alterar algum atributo
    set setServidor(novoIP: string){
        if(this.servidor === novoIP){
            throw new Error(`O novo IP deve ser diferente do IP  antigo`)
        }
        this.servidor = novoIP
    }
}

const GTA5 = new Jogo("192.168.5.10")
try {
    GTA5.setServidor = "192.250.155.10" 
} catch (error) {
    if(error instanceof Error) {
        console.log("ERROR:: ", error.message)
    } 
}

console.log(GTA5.getServidorIP)