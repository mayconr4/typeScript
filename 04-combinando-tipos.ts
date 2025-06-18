import { separador } from "./modulos";

export {};

/* Union Types*/

//União de tipos literais
let direcao: "esquerda" | "direita";
direcao = "esquerda";
console.log(direcao);

direcao = "direita";
console.log(direcao);

separador();

//Criando um novo tipo combinando outros tipos existentes
type NumeroOuTexto = number | string;
let exemploA: NumeroOuTexto = 2112;
let exemploB: NumeroOuTexto = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("Exemplo B: " + exemploB);

separador();

// Criando um novo type com tipos literais
type Status = "ativo" | "inativo" | "pendente";
let situacaoAluno1: Status = "ativo";
let situacaoAluno2: Status = "inativo";
let situacaoAluno3: Status = "pendente";

console.log("Situação 1: " + situacaoAluno1);

type DiasdaSemana =
  | "Domingo"
  | "Segunda-feira"
  | "Terça-Feira"
  | "Quarta-feira";

const diaAtual: DiasdaSemana = "Quarta-feira";
console.log(diaAtual);

separador();

/*interseção de tipos */

type Pessoa = { nome: string; idade: number };
type Funcionario = { salario: number };

const programador: Pessoa & Funcionario = {
  nome: "Lucas",
  idade: 18,
  salario: 5000,
};

console.log(`nome: ${programador.nome}`);
console.log(`idade: ${programador.idade}`);
console.log(`salario: ${programador.salario}`);

separador();

type Colaborador = Pessoa & Funcionario;
const outroProgramador: Colaborador = {
  nome: "Maycon",
  idade: 18,
  salario: 4500,
};
console.log(`nome: ${outroProgramador.nome}`);
console.log(`idade: ${outroProgramador.idade}`);
console.log(`salario: ${outroProgramador.salario}`);
