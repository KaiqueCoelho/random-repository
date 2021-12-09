const corLetra = document.querySelector('#textColor');
const corFundo = document.querySelector('#bgColor');
const tamanhoLetra = document.querySelector('#ftSize');
const espacamento = document.querySelector('#spacing');
const tipoLetra = document.querySelector('#ftType');

corLetra.addEventListener('click', function(){
    document.querySelector('p').classList.toggle('blue')
    localStorage.setItem('class', document.querySelector('p').className)
})

corFundo.addEventListener('click', function(){
    document.querySelector('section').classList.toggle('wheat')
    localStorage.setItem('backgroundColor', document.querySelector('section').className)
})

tamanhoLetra.addEventListener('click', function() {
    document.querySelector('p').classList.toggle('grande')
    localStorage.setItem('class', document.querySelector('p').className)
})

espacamento.addEventListener('click', function() {
    document.querySelector('p').classList.toggle('espacamento')
    localStorage.setItem('class', document.querySelector('p').className)
})

tipoLetra.addEventListener('click', function() {
    document.querySelector('p').classList.toggle('sans')
    localStorage.setItem('class', document.querySelector('p').className)
})

window.onload = carregaItens;

function carregaItens () {
    document.querySelector('p').className = localStorage.getItem('class');
    document.querySelector('section').className = localStorage.getItem('backgroundColor');
}

