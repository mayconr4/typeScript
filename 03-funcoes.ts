import { separador } from "./modulos";

export {};

function saudacao(nome: string): string {
  return `olá ${nome}!`;
}

console.log(saudacao("Maycon"));
//console.log(saudacao(true)) erro é passado como boolean;

separador();

function saudacaoCompleta(
  nome: string,
  anoLetivo: number = 2025,
  curso?: string
) {
  if (curso) {
    return `olá ${nome} você está estudando o curso  ${curso}`;
  }
  return `OLá ${nome}, sei lá o que você quer da sua vida`;
}

console.log(saudacaoCompleta("João Pedro", 2025, "desencolver back-end"));
console.log(saudacaoCompleta("Paulo"));
