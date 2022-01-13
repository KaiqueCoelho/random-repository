function posicaoDoMaiorNumero(numeros) {
    let maiorNumero = "0";
    for (key in numeros) {
        if (numeros[key] > numeros[maiorNumero]) {
        maiorNumero = key;
        }
    }  
    return maiorNumero;
}


