"use strict";
const novousuario = {
    email: "marcio@teste.com",
    status: true
};
// console.log(novousuario)
function novoUser(usuario) {
    console.log(usuario.email);
}
novoUser({ email: 'carol@teste.com', status: false });
