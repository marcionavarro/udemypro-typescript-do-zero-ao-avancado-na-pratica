"use strict";
// Generics
/*
    >>> Permite criar estruturas que serão adaptaveis a varios tipos de dados.
    ( Ajudando a reaproveitar melhor nosso código e deixa-lo mais flexível ))

    >>> Podemos usar os generics:
     Funções | interfaces / type | classes
*/
/*
    Alguns padrões que voçê pode encontrar:
    S => state;
    T => type;
    K => key;
    V => value;
    E => Element;
*/
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados(15);
repo1.setDados("15");
console.log(repo1.getDados());
const repo2 = repositorio();
repo2.setDados(25);
console.log(repo2.getDados());
