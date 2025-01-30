// Type alias conseguimos criar tipos mais poderosos, com mais informações doque tipos primitivos

type Info = {
    id: number
    nome: string
    descricao?: string
}

const produtoInfo: Info = {
    id: 123,
    nome: "Placa de Video",
    // descricao: "Placa GTX 2090"
}

type Categoria = {
    slug: string
    quantidadeProduto: number
}

const categoria1: Categoria = {
    slug: "hardware",
    quantidadeProduto: 2
}

// console.log(categoria1)

type ProdutoInfo = Info & Categoria; // ProdutoInfo é a intersessão (UNIAO) entre Info e Categoria 

const novoProduto: ProdutoInfo = {
    id: 534241,
    nome: 'Teclado RGB',
    slug: "teclado-mecanico",
    quantidadeProduto: 10
}
console.log(novoProduto)