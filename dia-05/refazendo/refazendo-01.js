/* 
  Suponha que você investiu R$ 1.000 em uma aplicação financeira que rende 12% ao ano.
  Usando um loop for, calcule como esse investimento cresce ao longo do tempo, nos próixmos 10 anos.

  Mostre o valor no console por ano.
*/
let valorInvestido = 1000;
const valorJuros = 0.12;
const anosInvestimento = 10;

for (let ano = 1; ano <= anosInvestimento; ano++) {
  valorInvestido += valorInvestido * valorJuros;
  console.log(
    `No ano ${ano} o valor do investimento é de ${valorInvestido.toFixed(2)}`
  );
}

console.log('-----------------DESAFIO 02----------------------');
/* 
Faça a contagem regressiva a partir de 10 até o lançamento de um foguete

Ao chegar nos últimos 3 segundos, é importante dar um aviso, então inclua o texto "Atenção!" junto à contagem. Quando a contagem terminar mostre a mensagem: "Lançamento do foguete!"

*/
let inicioContagemRegressiva = 10;

while (inicioContagemRegressiva >= 0) {
  if (inicioContagemRegressiva <= 3) {
    console.log(`Atenção! Faltam ${inicioContagemRegressiva} segundos`);
  } else {
    console.log(inicioContagemRegressiva);
  }
  inicioContagemRegressiva--;
}
console.log('Lançamento do foguete!');

console.log('-----------------DESAFIO 03----------------------');

/* 
  Calcule quanto tempo (em anos) levará para que um investimento inicial dobre, considerando uma taxa de juros de 5% ao ano.

  Use um loop while para realizar os cálculos.
*/

let valorInicial = 100;
const jurosAoAno = 0.05;
const valorFinal = valorInicial * 2;

let ano = 1;

while (valorInicial < valorFinal) {
  valorInicial += valorInicial * jurosAoAno;
  ano++;
}

console.log(`Levará ${ano} anos para o investimento inicial dobrar`);

console.log('-----------------DESAFIO 04----------------------');

/* 
  Você comprou um produto e optou por parcelar o valor em 12x sem juros. Escreva um código que imprima o valor de cada parcela e o valor restante a ser pago.
*/

let valorProduto = 1200;
const numeroDeParcelas = 12;
const valorParcela = valorProduto / numeroDeParcelas

for (let parcela = 1; parcela <= numeroDeParcelas; parcela++) {
  valorProduto -= valorParcela

  console.log(`Parcela ${parcela} valor parcela R$${valorParcela} restante a ser pago R$${valorProduto}`)
}
