"use strict";
/* type NovoProduto<V extends number | string> = {
    nome: string;
    preco: V;
} */
const arroz = {
    nome: "Arroz Branco",
    preco: 1500,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(1500));
