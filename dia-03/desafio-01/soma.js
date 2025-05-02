// Soma
/* 
 1. Adicione uma nova pontuação a um total de pontos existente em um jogo fictício.
 2. Para cada dia da semana defina a quantidade de horas trabalhadas e some o total.
 3. Imagine que na sua casa 3 pessoas ganham salários diferentes, some eles para saber o ganho total.
*/

/* 1 */
let pontos = 100;
const pontosGanhosNaRodada = 10;
console.log(`Nova quantidade de pontos: ${(pontos += pontosGanhosNaRodada)}`);

/* 2 */
const diasDaSemana = 5;
const horasTrabalhadas = 8;
console.log(`Total de horas trabalhadas: ${diasDaSemana * horasTrabalhadas}`);

/* 3 */
const salarioPessoa1 = 1500;
const salarioPessoa2 = 2000;
const salarioPessoa3 = 2500;
console.log(
  `Salário total da casa: R$${salarioPessoa1 + salarioPessoa2 + salarioPessoa3}`
);
