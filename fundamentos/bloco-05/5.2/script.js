let body = document.querySelector('body');
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';  // cria titulo h1
body.appendChild(h1);

let main = document.createElement('main')
body.appendChild(main);
main.className = 'main-content';   // adiciona tag main com classe main content

let section = document.createElement('section');
main.appendChild(section);
section.className = 'center-content';

let p = document.createElement('p');
section.appendChild(p);
p.innerText = 'Texto qualquer';

let sectionLeft = document.createElement('section');
main.appendChild(sectionLeft);
sectionLeft.className = 'left-content';

let sectionRight = document.createElement('section');
main.appendChild(sectionRight);
sectionRight.className = 'right-content';

let img = document.createElement('img');
sectionLeft.appendChild(img);
img.src = "https://picsum.photos/200";
img.className = 'small-image';

let ul = document.createElement('ul');
sectionRight.appendChild(ul);



for(let index = 0; index < 10; index += 1) {
    let li = document.createElement('li')
    ul.appendChild(li)[index];
}

ul.children[0].innerText = 'Um';
ul.children[1].innerText = 'Dois';
ul.children[2].innerText = 'Três';
ul.children[3].innerText = 'Quatro';
ul.children[4].innerText = 'Cinco';
ul.children[5].innerText = 'Seis';
ul.children[6].innerText = 'Sete';
ul.children[7].innerText = 'Oito';
ul.children[8].innerText = 'Nove';
ul.children[9].innerText = 'Dez';

for(let index = 0; index < 3; index += 1){
let h3 = document.createElement('h3')
main.appendChild(h3);
}

h1.className = 'title';
main.lastElementChild.className = 'description';
main.lastElementChild.previousSibling.className = 'description';
main.lastElementChild.previousElementSibling.previousElementSibling.className = 'description';

main.removeChild(sectionLeft);

sectionRight.style = 'margin-right: auto';

section.parentElement.style = 'background-color: green';

sectionRight.firstChild.lastChild.remove();
sectionRight.firstChild.lastChild.remove();