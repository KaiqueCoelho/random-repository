let processoSeletivo = "aprovado"

switch (processoSeletivo) {
    case "aprovado":
        console.log("Parabéns, você foi aprovado!")
        break;

    case "reprovado":
        console.log("Você foi reprovado")
        break;

    case "lista":
        console.log("Você está na lista de espera")
        break;

    default:
        console.log("Não se aplica")
}
