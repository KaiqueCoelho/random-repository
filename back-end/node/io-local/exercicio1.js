const funcao = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    const check = typeof num1 == 'number' && typeof num2 == 'number' && typeof num3 == 'number';
    if (!check) reject('Informe apenas numeros')

    const result = (num1 + num2) * num3;
    const check2 = result < 50

    if (check2) reject('Valor muito baixo')

    resolve(result);
  });
  return promise;
}

const executar = async () => {
  try {
    const random1 = Math.floor(Math.random() * 10 + 1)
    const random2 = Math.floor(Math.random() * 10 + 1)
    const random3 = Math.floor(Math.random() * 10 + 1)
    const resultado = await funcao(random1, random2, random3)
    console.log(resultado)
  } catch (error) {
    console.error(error)
  }
}

executar();