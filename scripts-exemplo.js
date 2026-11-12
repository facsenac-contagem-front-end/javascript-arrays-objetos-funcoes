//const professores = ["Bruno", "Thamara", "Telson"]
//console.log (professores);

//Métodos de array 
//professores.push ("João Carlos")
//console.log (professores);

//professores.unshift ("Moravia")
//console.log (professores);

//const fatiado  = professores.slice (1,4)
//console.log (fatiado)

//const frutas = ["Banana", "Maça", "Laranja", "Goiaba"]
//console.log (frutas.slice (1,3))

//const notas = [7, 6.5, 9, 8 ,7.3]
//console.log (notas)



//para array: for ... of 
//for (const nota of notas) {
//    console.log (nota)
//}

//let total = 0;

//for (let nota of notas){
//    total +=  nota;
    
//}

//console.log (`Soma das notas: ${total}`);
//console.log (`Média: ${total/notas.length}`)


//inicialização; verificação; atualização
//for (let index = 0; index < notas.length; index++) {
//console.log (notas[index]);
//let total = 0;
//total += notas [index];
//console.log (total)
//}







//const livro =  {
    // titulo: "A Microfísica do Poder",
    // autor: "Michel Foucault",
    // paginas: 268,
    // editora: "Sextante",
//    disponivel: true,
//    capitulos: ["Genealogia", "A Verdade e o Poder"],
//    preco: 69.9,
//}

//console.log (Object.keys(livro)) //vejo apenas as chaves 
//console.log (Object.values(livro)) //vejo apenas os valore
//console.log (Object.entries(livro)) //vejo apenas as entradas (chaves + valores)


const turma = [
    { nome: "Ana", nota: 8.5},
    { nome: "Bruno", nota: 6},
    {nome: "Carla",nota:9.2 },
];

for (let index = 0; index < turma.length; index++) {
    console.log (`Aluno: ${turma [index].nome} | Nota: ${turma [index].nota}`)
}