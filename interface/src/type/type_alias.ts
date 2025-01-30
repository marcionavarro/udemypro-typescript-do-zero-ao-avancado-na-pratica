
type Uuid = string | number | null

function acessar(uuid: Uuid, nome: string) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`)
}

function logUsuario(uuid: Uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`)
}

/* acessar(123, "Marcio");
acessar("55", "Carlos");

logUsuario("123") */

type Moedas = "BRL" | "EUR" | "USD" | "BTC"

function comprarItem(moeda: Moedas){
    console.log(`Comprando com a moeda ${moeda}`)
}

comprarItem("BTC")