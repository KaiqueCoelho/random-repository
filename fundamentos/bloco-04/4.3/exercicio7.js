let maiorNumeroPrimo = 0;

for (let numeroAtual = 1; numeroAtual <= 100; numeroAtual += 1) {
    let primo = true;
    for (let divisor = 2; divisor < numeroAtual; divisor +=1) {
        if (numeroAtual % divisor === 0) {
            primo = false;
            break
        }
    }
    if (primo === true) {
        maiorNumeroPrimo = numeroAtual;
    }
}
console.log(maiorNumeroPrimo)