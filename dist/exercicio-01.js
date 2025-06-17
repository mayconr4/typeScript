"use strict";
function exibirCor(nome, cor) {
    if (cor) {
        return `Olá ${nome} a cor foi ${cor}`;
    }
    return `Olá ${nome}`;
}
console.log(exibirCor("Maycon"));
console.log(exibirCor("Henrique", "preto"));
