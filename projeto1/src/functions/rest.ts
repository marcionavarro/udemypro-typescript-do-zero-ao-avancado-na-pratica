/* function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number {
    const total = venda1 + venda2 + venda3 + venda4
    console.log(total)
    return total;
}
totalVendas(10, 20, 30, 40) */

function totalVendas(...vendas: number[]) {
    const quantidadeVendas = vendas.length;
    console.log(`Voçê fez ${quantidadeVendas} vendas hoje`)
}

// totalVendas(10, 30, 25, 15, 90, 30);

function mostraNome(...nomes: string[]) {
    console.log(nomes.length)
    nomes.map(nome => console.log(nome))
}

mostraNome('Marcio', 'André', 'Ana', 'Carolina')