"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const bandas = ["Metalica", "slayer", "Iron maiden"];
bandas.push("Nightwish");
console.log(bandas);
const artistas = ["Jon Olivia", "Sting", "David gilmour"];
artistas.push("Neil Pert");
console.log(artistas);
(0, modulos_1.separador)();
const pessoas = ["Tiago", 28, "Maria", 45];
(0, modulos_1.separador)();
const linguagens = [
    ["JS", "TS"],
    ["HTML", "CSS", "Bootstrap"],
];
console.log(linguagens[0][0]);
console.log(linguagens[1][0]);
const numeros = [1, 3, 4, 5, 6];
const total = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log(total);
