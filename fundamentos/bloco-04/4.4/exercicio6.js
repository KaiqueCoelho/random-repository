function maiorNomeDaArray(nomes) {
    let maiorNome = nomes[0];
    for (let index = 0; index < nomes.length; index+= 1) {
        if (nomes[index].length > maiorNome.length) {
            maiorNome = nomes[index];
        }
    }
    return maiorNome
}