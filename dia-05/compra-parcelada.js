/* 
  Você comprou um produto e optou por parcelar o valor em 12x sem juros. Escreva um código que imprima o valor de cada parcela e o valor restante a ser pago.
*/

let valorProduto = 1200;
const numeroDeParcelas = 12;
const valorDaParcela = valorProduto / numeroDeParcelas;

for (let parcela = 1; parcela <= numeroDeParcelas; parcela++) {
  valorProduto -= valorDaParcela;

  console.log(
    `O valor da parcela ${parcela} é de R$${valorDaParcela} e ainda faltam R$${valorProduto} a serem pagos`
  );
}
