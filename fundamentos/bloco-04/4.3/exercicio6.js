let array = ['java', 'aaaaaaaaaaaaaaaaa', 'a', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
for (let index = 0; index < array.length; index +=1) {
    if (array[index].length >= maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra)

let menorPalavra = maiorPalavra;

for (let index = 0; index < array.length; index +=1) {
    if (array[index].length <= menorPalavra.length) {
        menorPalavra = array[index];
    }
}
console.log(menorPalavra)