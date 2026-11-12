/*const professores = ["Bruno", "Rubens", "Tamara"]
professores.push ("João Carlos")
professores.unshift("Telson")

console.log (professores)

const fatiado = professores.slice(1, 4)
console.log (fatiado)

const frutas = ["Banana", "maça","laranja","melão"]
console.log (frutas.slice(1, 3))
*/
/*const notas = [2,8,3,5,9.5]
console.log (notas)*/


/*for (let index = 0; index < nota.length; index++){
    console.log(nota[index])
}*/

/*for (const nota of notas){
    console.log(nota)
}*/

/*let total = 0;

for (const nota of notas){
    total += nota;  
}


console.log(`soma das notas: ${total}`)
console.log(`media ${total/notas.length}`)
*/



/*const livro = {
    titulo: "Love ME",
    autor: "HH",
    paginas: 200,
    editora: "Senac",
    disponivel: true,
    capitulos: ["Love", "Me"],
    preco: 59.99
}

console.log(livro.disponivel, livro.preco)

console.log(Object.keys(livro))
console.log(Object.values(livro))
console.log(Object.entries(livro))*/


const turma = [
    {nome: "Ana", nota: 8.5},
    {nome: "Bruno", nota: 6},
    {nome: "Carla", nota: 9.2}
];

for (let index = 0; index < turma.length; index++){
    console.log(`Aluno:${turma[index].nome} | Nota:${turma[index].nota}`)
}