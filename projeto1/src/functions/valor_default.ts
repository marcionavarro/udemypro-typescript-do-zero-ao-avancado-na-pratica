// Como deixar o valor por default ou deixar ele opcional.

function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void {
    let data = { email, senha, nome, idade }
    console.log(data)
}

cadastro('mn@teste.com', '123123', "Marcio Navarro", 40)

function cadastroLoja(nome: string, email: string, status = false): boolean {
    console.log("Status atual da loja: ", status);

    return status
}

cadastroLoja('Mocinhos&Bandidos', 'mb@teste.com', true)