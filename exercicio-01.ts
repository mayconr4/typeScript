/*
1)Crie ums função chamada "exibirCor" que aceite:
- nome da pessoa (obrigatório)
-  cor preferida da pessoa (opcional)

atenção: O parâmetro cor deve ser  do tipo Cor e aceitar somente 5 cores.

2) chame a função pelo menos duas vezes:
-Na primeira, passe o nome e uma cor (das possiveis)
-Na segunda, passe somente o nome 

*/
type Cor = "Azul" | "Rosa" | "Vermelho" | "preto" | "marrom";
function exibirCor(nome: string, cor?: Cor) {
  if (cor) {
    return `Olá ${nome} a cor foi ${cor}`;
  }
  return `Olá ${nome}`;
}

console.log(exibirCor("Maycon"));
console.log(exibirCor("Henrique", "Rosa"));
