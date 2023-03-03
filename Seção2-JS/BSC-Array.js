//               0       1        2          3      4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 

console.log(typeof alunos); //tipo da array
console.log(alunos instanceof Array);  

alunos.push('Luiza'); //coloca no ultimo indice
alunos.unshift('Fábio'); // Adiciona no começo
alunos[4] = 'Jorgim'; // Adicionando a força 
alunos[alunos.length] = 'Marcin';  // Adicionando a força 

console.log(alunos)

const removido = alunos.shift(); //removido no inicio 
const removido2 = alunos.pop();  //removido no fim
console.log(removido);
console.log(alunos);

delete alunos[1]; //deleta o conteudo nao o indice
console.log(alunos[1]);

console.log(alunos.slice(0, -2));// mostra todos os elementos menos o tanto q colcoar