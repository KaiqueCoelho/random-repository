function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ul = document.querySelector('#days');

function daysNumber(array) {
  for(let index = 0; index < array.length; index += 1) {
    let dias = array[index];
    let liCriada = document.createElement('li');
    liCriada.innerHTML = dias;
    ul.appendChild(liCriada)
    liCriada.className = 'day';
  }
}

daysNumber(dezDaysList);

let li = document.getElementsByClassName('day');

for(let index = 0; index < li.length; index += 1) {
  if (li[index].innerText == 24 || li[index].innerText == 25 || li[index].innerText == 31) {
    li[index].className += ' holiday';
  }
}

for(let index = 0; index < li.length; index += 1) {
  if (li[index].innerText == 4 || li[index].innerText == 11 || li[index].innerText == 18 || li[index].innerText == 25) {
    li[index].className += ' friday';
  }
}

function holidayButton(string) {
  let button = document.createElement('button');
  let div = document.getElementsByClassName('buttons-container')[0];
  div.appendChild(button);
  button.id = 'btn-holiday';
  button.innerText = string;
}

holidayButton('Feriados');

let btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', holidayBackground)

let holiday = document.getElementsByClassName('holiday');
function holidayBackground() {
  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor == 'rgb(38, 238, 238)') {
      holiday[index].style.backgroundColor = 'rgb(238, 238, 238)'
    } else {
      holiday[index].style.backgroundColor = 'rgb(38, 238, 238)'
    }
  }
}

function fridayButton(string) {
  let button = document.createElement('button');
  let div = document.getElementsByClassName('buttons-container')[0];
  div.appendChild(button);
  button.id = 'btn-friday';
  button.innerText = string;
}

fridayButton('Sexta-feira');
let btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', fridayText)

let friday = document.getElementsByClassName('friday');
function fridayText() {
  if (friday[0].innerText == 'Sextou!') {
    friday[0].innerText = '4'
    friday[1].innerText = '11'
    friday[2].innerText = '18'
    friday[3].innerText = '25'
  } else {    
    friday[0].innerText = 'Sextou!'
    friday[1].innerText = 'Sextou!'
    friday[2].innerText = 'Sextou!'
    friday[3].innerText = 'Sextou!'
  }
}

// let daysContainer = document.getElementById('days');
// daysContainer.addEventListener('mouseover', function(event) {
//   event.target.style = 'font-size: 50px';
// })

// daysContainer.addEventListener('mouseout', function(event) {
//   event.target.style = 'font-size: 20px';
// })

function addTarefa(string) {
  let tasks = document.getElementsByClassName('my-tasks')[0];
  let span = document.createElement('span');
  span.innerText = string
  tasks.appendChild(span)
}

addTarefa('Estudar')
