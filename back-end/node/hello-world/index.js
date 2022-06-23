const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
const hobbie = readline.question('Qual o seu hobbie?');
console.log(`Hello, ${name}! You are ${age} years old and likes to ${hobbie}`);
// console.log('Hello, world!');