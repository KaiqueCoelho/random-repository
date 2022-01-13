function fatoriall(numero) {
  for (let index = numero - 1; index > 1; index -= 1) {
    numero = numero * index;
  }
  return numero;
}

console.log(fatoriall(7));

const fatorial = (n) => n > 1 ? n * fatorial(n - 1) : 1;

console.log(fatorial(7));