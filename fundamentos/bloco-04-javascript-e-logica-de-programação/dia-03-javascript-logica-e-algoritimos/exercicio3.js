let base = 5;
let posição = base;
let asterisco = "*";
let espaço = " ";
let resultado = "";

for (let coluna = 0; coluna < base; coluna += 1) {
    for (linha = 0; linha <= base; linha += 1) {
        if (linha >= posição) {
            resultado += asterisco;
        }
        else {
            resultado += espaço;
        }
    }
 console.log(resultado)
 posição-=1;
}
