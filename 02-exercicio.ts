/*

2) Cria uma função que receba um objeto baseado an interface Produto e que mostre nome, ´reço e garantia. Obs.: o objeto deve ser desestruturado como parâmetros individuais.

3) Usa a função pelo menos 2x passando produtos diferentes.
*/

//1) Crie uma interface para representar um produto com as propriedade nome, preço e grantia
interface Produto {
  nome: string;
  preco: Number;
  garantia: boolean;
}

const produtoA: Produto = {
  nome: "Liquidificador",
  preco: 500,
  garantia: true,
};

const produtoB: Produto = {
  nome: "Fone headset",
  preco: 200,
  garantia: false,
};

function exibiProduto({ nome, preco, garantia }: Produto) {}
