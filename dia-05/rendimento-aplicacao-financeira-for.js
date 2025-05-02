/* 
  Suponha que você investiu R$ 1.000 em uma aplicação financeira que rende 12% ao ano.
  Usando um loop for, calcule como esse investimento cresce ao longo do tempo, nos próixmos 10 anos.

  Mostre o valor no console por ano.
*/

let valorInvestido = 1000;
const rendimentoAno = 0.12;
const anosInvestimento = 10;

for (let ano = 1; ano <= anosInvestimento; ano++) {
  valorInvestido += valorInvestido * rendimentoAno
  
  console.log(
    `O total de dinheiro no ano ${ano} é de ${valorInvestido.toFixed(2)}`
  );
}
