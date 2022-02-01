const cryptoContainer = document.querySelector("ul");

const fetchCrypto = () => {
  const url = "https://api.coincap.io/v2/assets";

  try {
    const myObject = {
      method: "GET",
      headers: { Accept: "application/json" },
    };
    fetch(url, myObject)
      .then((response) => response.json())
      .then((data) => {
        const array = data.data;
        array.forEach((crypto) => {
          if (crypto.rank <= 10) {
            const li = document.createElement("li");
            li.innerText = `Nome: ${crypto.name}  ||  Rank: ${
              crypto.rank
            }  ||  Simbolo: ${crypto.symbol}  ||  Preço em Dólar: ${Math.round(
              crypto.priceUsd
            )}`;
            cryptoContainer.appendChild(li);
            console.log(crypto);
          }
        });
      });
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
};

fetchCrypto();
