/* nome_do _metodo.push(" "); ao final do array
 nome_do _metodo.unshift(" "); ao início do array
 nome_do _metodo.pop(); remove o último elemento do array
 nome_do _metodo.slice(0, x); seleciona a parte que vc quer do array, 
       sendo 0 o primeiro dado, e x o último dado que vc quer selecionar, 
       lembrando que o último dado não é incluído na seleção*/

//const professores = ["Tamara", "Bruno", "Moravia", "João", "Telson"];
//console.log(professores);


// const notas = [10, -9, 8, 7.5,  3, 2, 1];
// for (let index = 0; index < notas.length; index++) {
// }

// let total = 0;
// for (const nota of notas) {
//     total += nota;
// }
// console.log('Média das notas:', `${total / notas.length}`);


//Arrays: []  /  Objetos: {}  /  Funções: function() {}
/*const livro = {
    titulo: "O pequeno príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    paginas: 96,
    editora: "Companhia das Letras",
    disponibilidade: true,
    capitulos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    preco: 29.90
};
console.log(livro.titulo, livro.autor, livro.preco);


console.log(Object.keys(livro)); // retorna apenas as chaves do objeto
console.log(Object.values(livro)); // retorna apenas os valores do objeto
console.log(Object.entries(livro)); // retorna as chaves e valores do objeto */




const turma = [
    { nome: "Tamara", nota: 10 },
    { nome: "Bruno", nota: 8 },
    { nome: "Moravia", nota: 7.5 }
];

for (let index = 0; index < turma.length; index++) {
    console.log(`Aluno: ${turma[index].nome} | Nota: ${turma[index].nota}`);
}

//IMPRIMIR NO TERMINAL:
//  Aluno: Tamara | Nota: 10