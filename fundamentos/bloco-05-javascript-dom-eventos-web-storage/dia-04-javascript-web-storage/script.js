const corLetra = document.querySelector('#textColor');
const corFundo = document.querySelector('#bgColor');
const tamanhoLetra = document.querySelector('#ftSize');
const espacamento = document.querySelector('#spacing');
const tipoLetra = document.querySelector('#ftType');

corLetra.addEventListener('click', function(){
    document.querySelector('p').classList.toggle('blue')
})

corFundo.addEventListener('click', function(){
    document.querySelector('section').classList.toggle('wheat')
})

tamanhoLetra.addEventListener('click', function() {
    document.querySelector('p').classList.toggle('grande')
})

espacamento.addEventListener('click', function() {
    document.querySelector('p').classList.toggle('espacamento')
})

tipoLetra.addEventListener('click', function() {
    document.querySelector('p').classList.toggle('sans')
})

