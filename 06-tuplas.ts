import { separador } from "./modulos";

export {};
/*Tuplas 
são um tipo de array especiaç usada quando precisamos armazenar um conjunto 
fixo de elmentos de tipos diferentes. */

const usuario: /*readonly*/ [string, number, boolean] = ["Maycon", 18, true]; // readonly deixa valores imutáveis ou seja não podem ser modificados após serem definidos.

console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30; // atualizando o valor da tupla
console.log(usuario[1] + "anos.");

separador();

// criando uma tupla como tipo
type Produto = [string, number];

const produtoA: Produto = ["Camiseta", 29.99];
//const produtoB:Produto = [100, "Calça"];// pois está fora da tupla
const produtoC: Produto = ["TV", 1000];

console.log(produtoA);
console.log(produtoC);

separador();

//Usando tupla no retorno de função
function verificaOperacao(sucesso: boolean): [number, string] {
  if (sucesso) {
    return [200, "Operação realizada com sucesso!"];
  }
  return [500, "Erro insesperado no servidor"];
}

let resultadoDaOperacao = verificaOperacao(false);
console.log(resultadoDaOperacao);
