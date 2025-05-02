/* 
  Suponha que você investiu R$ 1.000 em uma aplicação financeira que rende 12% ao ano.
  Usando um loop for, calcule como esse investimento cresce ao longo do tempo, nos próixmos 10 anos.

  Mostre o valor no console por ano.
*/
let valorInvestido = 1000;
const rendimentoAoAno = 0.12;
const anosDeInvestimento = 10;

for (let ano = 1; ano <= anosDeInvestimento; ano++) {
  valorInvestido += valorInvestido * rendimentoAoAno;
  console.log(
    `O valor investido no ano ${ano} é de R$${valorInvestido.toFixed(2)}`
  );
}

console.log('-----------------DESAFIO 02----------------------');
/* 
Faça a contagem regressiva a partir de 10 até o lançamento de um foguete

Ao chegar nos últimos 3 segundos, é importante dar um aviso, então inclua o texto "Atenção!" junto à contagem. Quando a contagem terminar mostre a mensagem: "Lançamento do foguete!"
while
*/
let segundosParaLançamento = 10;

while (segundosParaLançamento >= 0) {
  if (segundosParaLançamento <= 3) {
    console.log(`Atenção! ${segundosParaLançamento} segundos`);
  } else {
    console.log(segundosParaLançamento);
  }
  segundosParaLançamento--;
}

console.log(`Lançamento do foguete!`);

console.log('-----------------DESAFIO 03----------------------');

/* 
  Calcule quanto tempo (em anos) levará para que um investimento inicial dobre, considerando uma taxa de juros de 5% ao ano.

  Use um loop while para realizar os cálculos.
*/
let investimento = 100;
let anos = 1;
const taxaDeJuros = 0.05;
const valorFinalInvestimento = 100 * 2;

while (investimento <= valorFinalInvestimento) {
  investimento += investimento * taxaDeJuros;
  console.log();
  anos++;
}
console.log(`Levará ${anos} anos para que o investimento dobre`);

console.log('-----------------DESAFIO 04----------------------');

/* 
  Você comprou um produto e optou por parcelar o valor em 12x sem juros. Escreva um código que imprima o valor de cada parcela e o valor restante a ser pago.
*/
let numeroDeParcelas = 12;
let valorProduto = 1200;
const valorDasParcelas = 1200 / 12;

for (let parcela = 1; parcela <= numeroDeParcelas; parcela++) {
  valorProduto -= valorDasParcelas;
  console.log(
    `O valor da parcela ${parcela} é de R$${valorDasParcelas} e ainda faltam R$${valorProduto} para pagar`
  );
}
