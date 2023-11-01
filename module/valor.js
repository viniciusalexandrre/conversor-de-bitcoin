export default function initFechBitcoin() {}

fech("https://blockchain.info/ticker")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.BRL.sell);
  });

// export default function initFechBitcoin() {
//   fetch("https://blockchain.info/ticker")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Erro na solicitação");
//       }
//       return response.json();
//     })
//     .then((json) => {
//       console.log(json.BRL);
//     })
//     .catch((error) => {
//       console.error("Ocorreu um erro:", error);
//     });
// }
