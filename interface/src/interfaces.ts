/* let loja: object;

loja = {
    nome: 'BK',
    endereco: 'Rua x',
    status: true
} */

    interface LojaProps {
        nome: string;
        endereco: string;
        status: boolean
        produtoPromocao?: string;
    }

    const  BurguerK: LojaProps = {
        nome: 'Burguer K',
        endereco: 'Rua x',
        status: true,
    }

    // console.log(BurguerK)

    function novaLoja({nome, endereco, status}: LojaProps) {
        console.log(`Loja ${nome} criada com sucesso!`)
        console.log(`Endereço da loja é ${endereco}`)
        console.log(`Status da loja é ${status}`)

        console.log('==============================')
    }

    novaLoja({nome: "Red Burguer", endereco: "Rua w", status: false})
    novaLoja({nome: "Subway", endereco: "Rua y", status: true})