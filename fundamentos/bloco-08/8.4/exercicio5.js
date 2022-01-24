const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const containsA = names.reduce((acumulator, name) => acumulator.reduce((acc, letra) => {
  if (letra.toLowerCase() === 'a') {
    acc += 1;
  }
} ))