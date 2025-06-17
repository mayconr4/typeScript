"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function saudacao(nome) {
    return `olá ${nome}!`;
}
console.log(saudacao("Maycon"));
(0, modulos_1.separador)();
function saudacaoCompleta(nome, anoLetivo = 2025, curso) {
    if (curso) {
        return `olá ${nome} você está estudando o curso  ${curso}`;
    }
    return `OLá ${nome}, sei lá o que você quer da sua vida`;
}
console.log(saudacaoCompleta("João Pedro", 2025, "desencolver back-end"));
console.log(saudacaoCompleta("Paulo"));
