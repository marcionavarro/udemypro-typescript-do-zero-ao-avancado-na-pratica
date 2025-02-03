"use strict";
// Herança > quando nós temos uma classe que herda de outra classe
// ClasseAPI tem seus atributos e a classe FILHA vai herdar todos atributos do pai alem dos seus proprios atributos
/*
    Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
     public, protected, private, , readonly (apenas nos atributos)

    >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da classe
     em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

    >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados,
     ou seja ele não pode ser acessado ou modificado fora da classe em que foi criado.

    >> E o famos readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
     não podemos alterar ele.
*/
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
    mudarCargo(cargo) {
        console.log('ALTERANDO CARGO PARA: ', cargo);
        console.log('ID DO USUARIO: ', this.id);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        // Chamando o construtor da classe PAI
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const usuario1 = new Admin(123, 'Marcio', 'marcio@teste.com', 'Programador', 2);
// usuario1.cargo = 'Designer'
// usuario1.id
usuario1.acessarAdmin();
// console.log(usuario1)
