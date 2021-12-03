function trocaTexto(elemento) {
    elemento.innerText = "Trabalhando e recebendo bem, morando com minha namorada"

    return elemento
}

trocaTexto(document.getElementsByTagName('p')[0])

function trocaCorDeFundo(elemento) {
   elemento.style.backgroundColor = 'rgb(76,164,109)';
}

trocaCorDeFundo(document.getElementsByClassName('main-content')[0])

function trocaCorDeFundoBranco(elemento) {
    elemento.style.backgroundColor = 'white';
}

trocaCorDeFundoBranco(document.getElementsByClassName('center-content')[0])

