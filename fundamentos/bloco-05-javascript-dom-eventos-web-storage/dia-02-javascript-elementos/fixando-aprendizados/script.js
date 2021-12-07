document.querySelector('#elementoOndeVoceEsta')

document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'green';

document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText = 'teste';

document.querySelector('#pai').firstElementChild

document.querySelector('#elementoOndeVoceEsta').parentElement.firstElementChild

document.querySelector('#elementoOndeVoceEsta').parentElement.childNodes[4]

document.querySelector('#pai').childNodes[5]

let local = document.getElementById('pai');
local.appendChild(document.createElement('div')) // cria div irmã do elementoOndeVoceEsta

let local2 = document.getElementById('elementoOndeVoceEsta');
local2.appendChild(document.createElement('div')) // cria div filha do elementoOndeVoceEsta

let local3 = document.getElementById('primeiroFilhoDoFilho');
local3.appendChild(document.createElement('div')) // cria div filha do primeiroFilhoDoFilho

let div = document.getElementById('primeiroFilhoDoFilho').lastChild
div.parentElement.parentElement.nextElementSibling // acessa terceiro filho

document.querySelectorAll('section')[4].remove();
document.querySelectorAll('section')[4].remove();
document.querySelectorAll('section')[4].remove();

