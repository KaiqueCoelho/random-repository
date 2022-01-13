const longestWord = (frase) => {
  const palavras = frase.split(' ');
  let maiorPalavra = palavras[0];
  for (let i = 0; i < palavras.length; i += 1) {
    palavras[i].length > maiorPalavra.length ? maiorPalavra = palavras[i] : maiorPalavra = maiorPalavra;
  }
  console.log(maiorPalavra)
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');
