export {};

/*Interfaces são usadas para definir a forma de um objeto. especializando os tipos de suas propriedades e métodos. São utris para garantir que os objetos sigam uma estrutura especifica. */

interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
  email?: string;
}

const usuarioA: Usuario = {
  nome: "João",
  idade: 0,
  ativo: true,
};

const usuarioB: Usuario = {
  nome: "ALana",
  idade: 17,
  ativo: false,
  email: "alana@gmail.com",
};

console.log(usuarioA);
console.log(usuarioB);
