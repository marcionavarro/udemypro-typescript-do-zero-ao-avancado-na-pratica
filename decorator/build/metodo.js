"use strict";
// Decorator Método, ele só é chamado quando nosso método for chamado em algum lugar
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const verificaPessoa_1 = require("./decorators/verificaPessoa");
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    cadastrarPessoa() {
        console.log(`Bem vindo ${this.nome} ao sistema`);
    }
}
__decorate([
    (0, verificaPessoa_1.verificaPessoa)(20)
], Pessoa.prototype, "cadastrarPessoa", null);
const pessoa1 = new Pessoa('Marcio N.');
pessoa1.cadastrarPessoa();
