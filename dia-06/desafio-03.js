/* 
  Volte ao dia 5, no desafio 01, e crie uma função que fará todo o cálculo que detalhamos no desafio

  Você tem um valor inicial de uma aplicação financeira que rende um percentual ao ano. 
  Calcule como esse investimento cresce no decorrer do ano.
*/

(function calcularInvestimento(valorInvestido, anosDeInvestimento, taxaJuros) {
  for (let ano = 1; ano <= anosDeInvestimento; ano++) {
    valorInvestido += valorInvestido * taxaJuros;

    console.log(
      `O total de dinheiro no ano ${ano} é de ${investimento.toFixed(2)}`
    );
  }
})(20000, 10, 0.12);
  