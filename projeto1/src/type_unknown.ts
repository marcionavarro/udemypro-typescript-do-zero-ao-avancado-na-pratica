// Tipo desconhecido > quando voçê não sabe o TIPO que vai receber.

let total: unknown;

total = 100;
total = '350';

total = {
    total: 100
}

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

// valor do tipo unknown só podem ser atribuidos ao tipo unknown ou any
let totalEntrega: unknown = totalPedido;

console.log(totalEntrega)