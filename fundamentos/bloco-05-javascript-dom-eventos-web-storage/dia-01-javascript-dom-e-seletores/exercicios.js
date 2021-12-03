function trocaTexto(elemento) {
    elemento.innerText = "Trabalhando e recebendo bem, morando com minha namorada"

    return elemento
}

trocaTexto(document.getElementsByTagName('p')[0])

function trocaCorDeFundo(elemento) {
   return elemento.style.backgroundColor = 'rgb(76,164,109)';
}

trocaCorDeFundo(document.getElementsByClassName('main-content')[0])

function trocaCorDeFundoBranco(elemento) {
    return elemento.style.backgroundColor = 'white';
}

trocaCorDeFundoBranco(document.getElementsByClassName('center-content')[0])

function arrumaTexto(elemento) {
    return elemento.innerHTML = 'Exercício 5.1 - JavaScript';
}

arrumaTexto(document.getElementsByClassName('title')[0])

function todasMaiusculas(elemento) {
for (let index = 0; index < elemento.length; index += 1) {
    return elemento[index].innerText.toUpperCase();
}
}

todasMaiusculas(document.getElementsByTagName('p'))