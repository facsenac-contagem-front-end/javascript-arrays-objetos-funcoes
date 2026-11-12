// Crie produtos, um array com 4 objetos: nome, preco e estoque.Escreva emEstoque(lista), 
// que devolve só os produtos com estoque maior que 0.Escreva total(lista), que soma os preços.
// Mostre cada produto em estoque assim: Caderno: R$ 12.50Bônus: com um for, gere a lista de preços com 10% de desconto.

const produtos = [
  { nome: "Caderno", preco: 12.5, estoque: 3 },
  { nome: "Caneta", preco: 5.5, estoque: 15},
  { nome: "Monitor", preco: 99.99, estoque: 0},
  { nome: "Bolsa", preco:29.99, estoque: 5}
]; 
function emEstoque(lista) { 
    return lista.filter(produtos > 0)
} 
function total(lista) { 
// sua vez 
}



/* 
const professores = ["Bruno", "Rubens","Tamara",]
console.log(professores);
Metodos de array
professores.push("João Carlos")
console.log(professores);
professores.unshift("Telson")
console.log(professores);

const fatiado = professores.slice(1,4)
console.log(fatiado);

const frutas = ["Banana", "Morango", "Laranja", "Melância"]
console.log(frutas.slice(1,3));
*/
/*

const notas = [7, 6.5, 9, 8, 7.3];
let total = 0;

for (let index = 0; index < notas.length; index++) {
    console.log(notas[index]);
    total += notas[index]
}
console.log(`Soma das Notas: ${total}`)
let media = total / notas.length
console.log(`Media das Notas: ${media}`)

// para array: for ... of


for (const nota of notas) {
    console.log(nota)
    let total = 0
    total ++ nota
}
let media = total/notas.length
console.log(media)
*/

// ============================================================
/*
const livro = {
    titulo: "Rei de Amarelo",
    autor: "Robert W. Chambers",
    paginas: 316,
    editora: "Darkside Books",
    disponivel: true,
    capitulos: ["The Mask", "The Yellow Sign"],
    preco: 58.68
};

for (const chave in livro) {
    console.log(chave)
}
*/
// console.log(Object.keys(livro));
// console.log(Object.values(livro));
// console.log(Object.entries(livro));
/*
const turma = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6 },
  { nome: "Carla", nota: 9.2 } 
]; 

for (let index = 0; index < turma.length;index ++) {
    console.log(`Aluno: ${turma[index].nome} | Nota: ${turma[index].nota}`);
}
*/