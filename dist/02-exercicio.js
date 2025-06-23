"use strict";
function mostrarProduto(produto) {
    console.log("Produto: " + produto.nome);
    console.log("Preço: " + produto.preco);
    console.log("Garantia: " + produto.garantia);
}
const produto1 = {
    nome: "Liquidificador",
    preco: 500,
    garantia: true,
};
const produto2 = {
    nome: "Fone headset",
    preco: 200,
    garantia: false,
};
console.log(mostrarProduto(produto1));
console.log("\n-----\n");
console.log(mostrarProduto(produto2));
