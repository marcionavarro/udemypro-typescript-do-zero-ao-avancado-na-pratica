// Decorator Método, ele só é chamado quando nosso método for chamado em algum lugar

import { verificaPessoa } from './decorators/verificaPessoa';

class Pessoa {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    @verificaPessoa(20)
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema`)
    }
}

const pessoa1 = new Pessoa('Marcio N.');
pessoa1.cadastrarPessoa();