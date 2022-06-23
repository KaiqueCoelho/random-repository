const readline = require('readline-sync');

const tempo = readline.questionInt("Qual o tempo em segundos?");
const distancia = readline.questionInt("Qual a distancia em metros?");

const velocidade = () => distancia / tempo;

console.log(`A velocidade média foi: ${velocidade()}}`);