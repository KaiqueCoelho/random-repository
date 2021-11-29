let numbers = [500, 9, 3, 19, 70, -8, 100, 200, 35, 27];
let menorNumero = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
    else {
        menorNumero = menorNumero
    }
}

console.log(menorNumero)