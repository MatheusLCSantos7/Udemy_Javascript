let umaString = 'Meu valor';


console.log(umaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc
console.log(umaString.indexOf('e', 0)); // Retorna o índice
console.log(umaString.lastIndexOf('e', umaString.length)); // Retorna o índice
console.log(umaString.replace(/e/g, '3'));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase()); 
console.log("--------------------------")
/*         number         */

let num1 = 0.7; // number
let num2 = 0.1; // number

 num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
 num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
 num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2)); //deixar com 2 casas decimais apenas 
console.log(Number.isInteger(num1)); //Retorna se um numero é INTEIRO
num1 = num1.toString();
console.log(num1.toString() + num2); //transformando o resutlado em CONCATENAÇÃO DE NUMEROS
temp = num1 + '5';
console.log(Number.isNaN(temp)); //verificando se tem NOT A NUMBER operação errada
console.log(temp);
console.log("--------------------------")

let num3 = 5;
let num4 = Math.floor(num3); //arredonda pra baixo
let num5 = Math.ceil(num3);//arredonda pra cima
let num6 = Math.round(num3);//arredonda automatico
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //maior da seq
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //menor da seq
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //numero aleatorio entre 10 e 5 e arredondando
console.log(aleatorio)
console.log( 2 ** 6 )//elevando ao quadrado
console.log(9 ** (1/2)) //raiz quadrada
console.log(num4)
console.log(num5)
console.log(num6)
