const readline = require('readline-sync');

const numero = Math.floor(Math.random() * 11);
const aposta = readline.questionInt("Qual numero acha que é?");

const sorteio = () => {
  if (numero != aposta) {
    return `Você errou, o numero é ${numero}`;
  } else {
    return `Parabéns! Você acertou, era o numero ${numero}`;
  }
} ;

console.log(sorteio());