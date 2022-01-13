let numbers = [500, 9, 3, -99, 70, -87, 100, 200, 35, 27];
let menorNumero = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}

console.log(menorNumero)