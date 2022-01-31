// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melancia', 'Abacaxi', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Maçã', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5000)); 