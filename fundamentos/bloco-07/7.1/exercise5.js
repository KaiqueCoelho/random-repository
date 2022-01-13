const button = document.querySelector('button');
const counter = document.querySelector('p');

button.addEventListener('click', () => counter.innerText >= 1 ? counter.innerText = parseInt(counter.innerText) + 1 : counter.innerText = 1);