type DadosConta = {
    nome: string
    numero: string
    endereco: string
}

abstract class ContaBanco {
    abstract abrirConta(dados: DadosConta): boolean
}

class PessoaFisica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {
        console.log('======================')
        console.log(`Nova conta P.Fisica criada com sucesso ${dados.nome}`)
        console.log('======================')
        return true
    }
}

class PessoaJuridica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {
        console.log('======================')
        console.log(`Nova conta P.Juridica criada com sucesso ${dados.nome}`)
        console.log('======================')
        return true
    }
}

const joana = new PessoaFisica();
joana.abrirConta({ nome: 'Joana Silva', numero: '123456', endereco: 'Rua 1' })

const carlos = new PessoaJuridica();
carlos.abrirConta({ nome: 'Carlos Alberto', numero: '54321', endereco: 'Rua 2' })
