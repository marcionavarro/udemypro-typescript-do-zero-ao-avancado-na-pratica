/* 
    >> Decorators <<
     Class
     Propriedade
     Métodos
     Parametros ( BEM POUCO USADO )
     GETTERS / SETTERS ( BEM POUCO USADO )
*/

// target = receber o construtor da classe
/* function logInfo(target: any) {
    console.log("Sistema está online!");
} */

// >>> Padrão factory (Fabrica) | Função que vai retornar a criação do decorator.
/* function logInfo(mensagem: string) {
    return (target: any) =>  console.log(`${mensagem}, ${target}`)
}

@logInfo("Servidor está rodando")
class Sistema {

} */

/// ================ PRATICANDO ===================
function setIpServidor(novoIp: string) {

    return (target: any) => { // target é o o construtor da classe
        return class extends target {
            ip = novoIp;
        }
    }

}

@setIpServidor("192.168.50.10")
class Servidor {
}

const servidor1 = new Servidor();
console.log(servidor1); 