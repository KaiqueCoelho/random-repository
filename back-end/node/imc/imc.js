const readline = require('readline-sync');

const nome = readline.question("Qual o seu nome?");
const peso = readline.questionFloat("Qual o seu peso em kg?");
const altura = readline.questionFloat("Qual a sua altura em metros?");

const imc = (peso, altura) => {
  const alturaQuadrado = altura * altura;
  return peso / alturaQuadrado;
};

console.log(`Olá ${nome}! Seu imc é ${imc(peso, altura)}`);