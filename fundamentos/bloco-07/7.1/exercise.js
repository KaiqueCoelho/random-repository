// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testandoEscopo = (escopo) => escopo === true ? console.log('Não devo ser utilizada fora do meu escopo (if)') : console.log('Não devo ser utilizada fora meu escopo (else)')
  // let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  // let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  // escopo === true ? `${ifScope} ótimo, fui utilizada no escopo !` : `${elseScope}`;


// console.log (testandoEscopo(true))

testandoEscopo(true)