const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

secondLi.addEventListener('click', addClassTech)
thirdLi.addEventListener('click', addClassTech)

function addClassTech() {
    secondLi.className = 'tech';
    thirdLi.className = 'tech';
}

input.addEventListener('keydown', changeTech)
function changeTech() {
    firstLi.innerText = 'JavaScript';
}

myWebpage.addEventListener('mouseover', colorChange)

function colorChange() {
    myWebpage.style = 'color: green';
}

myWebpage.addEventListener('dblclick', redireciona) 

function redireciona () {
    myWebpage.innerHTML = '<a href="https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-eventos/17f2fe86-921e-4e5c-ba08-b6ac47bec409/conteudos/9f8724d4-ad21-42ed-9db0-c63eceda08a4/parte-ii-conheca-o-addeventlistener/db47e802-262f-4a67-8d52-453495a048be?use_case=next_button" target="_blank">Meu top 3 do Spotrybefy</a>'
}



// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.