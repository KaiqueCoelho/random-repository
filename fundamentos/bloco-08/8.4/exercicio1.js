const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((acumulator, array) => acumulator.concat(array), []);

console.log(flatten)