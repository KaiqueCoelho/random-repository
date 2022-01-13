const estado = document.querySelector('#estado');
const bot = document.querySelector('#bot');
const form = document.querySelector('form');
const limpar = document.querySelector('#limpar')
const estadosBrasil = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Pàulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];

function criaSelector() {
  for (let index = 0; index < estadosBrasil.length; index += 1) {
    const option = document.createElement('option');
    option.textContent = estadosBrasil[index];
    estado.appendChild(option)
  }
}
criaSelector();

bot.addEventListener('click', (event) => {
  event.preventDefault();
})

limpar.addEventListener('click', () => {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#cpf').value = '';
  document.querySelector('#endereco').value = '';
  document.querySelector('#cidade').value = '';
  document.querySelector('#resumo').value = '';
  document.querySelector('#cargo').value = '';
  document.querySelector('#descricao').value = '';
  document.querySelector('#data').value = '';
  document.querySelector('#estado').value = '';
})