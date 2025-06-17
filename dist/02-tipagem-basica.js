"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
// exemplos de tiposbásicos
let idade = 30;
let ativo = true;
let nome = "Beltrano";
console.log(`${nome} tem ${idade} anos. `);
// Nova atribuição
idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);
(0, modulos_1.separador)();
/*Sobe o tipo ant (qualquer)
Tipo neutro rapidamente identificar qual o tipo do valor (exemplo: refatoração complexa de um projeto com JS antigo e que deve migrar par TS). */
let qualquerCoisa = "Pode ser qualquer coisa";
qualquerCoisa = 10; // number
qualquerCoisa = true; // agora boolean
console.log(`QUalques coisa: ${qualquerCoisa}`);
