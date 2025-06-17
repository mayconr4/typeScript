export {};
import { separador } from "./modulos";

// exemplos de tiposbásicos
let idade: number = 30;
let ativo: boolean = true;
let nome: string = "Beltrano";

console.log(`${nome} tem ${idade} anos. `);

// Nova atribuição
idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`Status: ${ativo ? "Ativo" : "Inativo"}`);

separador();

/*Sobe o tipo ant (qualquer)
Tipo neutro rapidamente identificar qual o tipo do valor (exemplo: refatoração complexa de um projeto com JS antigo e que deve migrar par TS). */
let qualquerCoisa: any = "Pode ser qualquer coisa";
qualquerCoisa = 10; // number
qualquerCoisa = true; // agora boolean

console.log(`QUalques coisa: ${qualquerCoisa}`);

separador();

/* Sobre tipagem implicita ou por inferência */
let exemplo = "Issi é uma String"; // TS infere que é string
let exemplo2 = 10; // TS infere que é number

let exemplo3; // neste casp, não tem como TS inferir nada. portanto, fica como any

// Variável sem valor mas já definida como tipoS String
let exemplo4: string;
