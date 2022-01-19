const newEmployees = (myFunction) => {
  const employees = {
    id1: myFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: myFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: myFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const myFunction = (nome) => {
  let funcionarios = nome.toLowerCase().split(' ').join('_');
  return ({nome, email:`${funcionarios}@trybe.com`,})
}

console.log(newEmployees(myFunction))