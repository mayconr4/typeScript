export {};

/*Enums são uma maneira de definir um conjunto de constantes nomeadas. Úteis par definir: status, categorias, grupos de valores relacionados etc */

enum DiasdaSemana {
  Domingo = "Domingo",
  Segunda = "Segunda-feira",
  Terca = "terça-feira",
  Quarta = "Quarta-feira",
}

const diaAtual: DiasdaSemana = DiasdaSemana.Quarta;
console.log(`o dia de hoje é ${diaAtual}`);
