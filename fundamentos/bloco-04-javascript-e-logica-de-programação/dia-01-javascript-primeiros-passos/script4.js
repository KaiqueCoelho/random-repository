const anguloUm = 20;
const anguloDois = -80;
const anguloTres = 80;

if (anguloUm + anguloDois + anguloTres === 180 && anguloUm > 0 && anguloDois > 0 &&anguloTres > 0) {
    console.log("true")
}

else if (anguloUm + anguloDois + anguloTres !== 180 && anguloUm > 0 && anguloDois > 0 &&anguloTres > 0) {
    console.log("false")
}

else {
    console.log("erro")
}
