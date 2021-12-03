function posicaoDoMenorNumero(numeros) {
    let menorNumero = 0;
    for (key in numeros) {
        if (numeros[key] < numeros[menorNumero]) {
            menorNumero = key;
        }
    }
    return menorNumero;
}