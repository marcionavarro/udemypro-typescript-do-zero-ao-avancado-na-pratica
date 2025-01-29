interface CadastroProps {
    nome?: string;
    email: string;
    status: boolean;
}

const novousuario: CadastroProps = {
    email: "marcio@teste.com",
    status: true
}

// console.log(novousuario)

function novoUser(usuario: CadastroProps) {
    console.log(usuario.email)
}

novoUser({ email: 'carol@teste.com', status: false})