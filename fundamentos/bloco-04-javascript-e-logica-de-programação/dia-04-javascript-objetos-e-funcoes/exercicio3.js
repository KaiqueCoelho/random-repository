function verificaPalindrome(palavra) {
   let palavraInvertida = palavra.split("").reverse("").join("");
   return palavraInvertida === palavra;
}

console.log(verificaPalindrome("asa"))

