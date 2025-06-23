/*

*/

//1) Crie uma interface para representar um produto com as propriedade nome, preço e grantia
interface Produto {
  nome: string;
  preco: Number;
  garantia: boolean;
}

//2) Cria uma função que receba um objeto baseado an interface Produto e que mostre nome, preço e garantia. Obs.: o objeto deve ser desestruturado como parâmetros individuais.
function mostrarProduto(produto: Produto): void {
  console.log("Produto: " + produto.nome);
  console.log("Preço: " + produto.preco);
  console.log("Garantia: " + produto.garantia);
}

//3) Usa a função pelo menos 2x passando produtos diferentes.
const produto1: Produto = {
  nome: "Liquidificador",
  preco: 500,
  garantia: true,
};
const produto2: Produto = {
  nome: "Fone headset",
  preco: 200,
  garantia: false,
};

//function exibiProduto({ nome, preco, garantia }: Produto) {}

console.log(mostrarProduto(produto1));
console.log("\n-----\n");
console.log(mostrarProduto(produto2));
