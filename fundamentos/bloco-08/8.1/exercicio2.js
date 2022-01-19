const sorteio = (aposta, numeroSorteado) => {
  let vencedor = numeroSorteado;
  let compara = aposta;
  if (compara === vencedor) {
    return `Parabéns vc ganhou!`
  } else {
    return `Vc perdeu, tente novamente!`
  }
}

const numeroAleatório = () => {
  let numero = Math.floor(Math.random() * 6);
  return numero;
}

console.log(sorteio(2, numeroAleatório()));