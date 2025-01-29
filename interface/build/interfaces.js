"use strict";
/* let loja: object;

loja = {
    nome: 'BK',
    endereco: 'Rua x',
    status: true
} */
const BurguerK = {
    nome: 'Burguer K',
    endereco: 'Rua x',
    status: true,
};
// console.log(BurguerK)
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso!`);
    console.log(`Endereço da loja é ${endereco}`);
    console.log(`Status da loja é ${status}`);
    console.log('==============================');
}
novaLoja({ nome: "Red Burguer", endereco: "Rua w", status: false });
novaLoja({ nome: "Subway", endereco: "Rua y", status: true });
