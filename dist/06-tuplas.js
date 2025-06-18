"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const usuario = ["Maycon", 18, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");
usuario[1] = 30;
console.log(usuario[1] + "anos.");
(0, modulos_1.separador)();
const produtoA = ["Camiseta", 29.99];
const produtoC = ["TV", 1000];
console.log(produtoA);
console.log(produtoC);
(0, modulos_1.separador)();
function verificaOperacao(sucesso) {
    if (sucesso) {
        return [200, "Operação realizada com sucesso!"];
    }
    return [500, "Erro insesperado no servidor"];
}
const [, resposta] = verificaOperacao(false);
console.log(resposta);
