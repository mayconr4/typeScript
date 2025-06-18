"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiasdaSemana;
(function (DiasdaSemana) {
    DiasdaSemana["Domingo"] = "Domingo";
    DiasdaSemana["Segunda"] = "Segunda-feira";
    DiasdaSemana["Terca"] = "ter\u00E7a-feira";
    DiasdaSemana["Quarta"] = "Quarta-feira";
})(DiasdaSemana || (DiasdaSemana = {}));
const diaAtual = DiasdaSemana.Quarta;
console.log(`o dia de hoje é ${diaAtual}`);
