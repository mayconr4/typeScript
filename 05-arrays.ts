import { separador } from "./modulos";

export {};

// SIntaxe 2
const bandas: Array<string> = ["Metalica", "slayer", "Iron maiden"];
// bandas.push(10); // erro
bandas.push("Nightwish");
console.log(bandas);

// sintaxe 2
const artistas: string[] = ["Jon Olivia", "Sting", "David gilmour"];
artistas.push("Neil Pert");
console.log(artistas);

separador();

//Arrays com tipos msitos ou combinados
const pessoas: (string | number)[] = ["Tiago", 28, "Maria", 45];

separador();

const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);

/*Mini-exercicio 
1) Crie um array de números
2) Calcula a soma de todos os elementos e guarde numa variável
3) Mostre o resultado da soma */

const numeros: number[] = [1, 3, 4, 5, 6];
