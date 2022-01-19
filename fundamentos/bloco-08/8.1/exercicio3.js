const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const quantidadeAcertos = (gabarito, respostas) => {
  let pontos = 0;
  for(let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respostas[i]) {
      pontos = pontos + 1
    } else if (respostas[i] === 'N.A') {
      pontos = pontos;
    } else {
      pontos = pontos - 0.5
    }
  }
  return pontos;
}

// const verifica = (sinal) => {
//   let pontuação = 0;
//   if (sinal === '-') {
//     pontuação -= 0.5;
//   } else if (sinal === '+') {
//     pontuação += 1; 
// }

console.log(quantidadeAcertos(RIGHT_ANSWERS, STUDENT_ANSWERS));