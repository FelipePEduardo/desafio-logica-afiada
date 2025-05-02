/* 
  Calcule quanto tempo (em anos) levará para que um investimento inicial dobre, considerando uma taxa de juros de 5% ao ano.

  Use um loop while para realizar os cálculos.
*/

let investimento = 1000;
const taxaDeJurosAoAno = 0.05;
const investimentoFinal = investimento * 2;

let ano = 1;

while (investimento < investimentoFinal) {
  investimento += investimento * taxaDeJurosAoAno;
  ano++;
}

console.log(`Para o investimento inicial dobrar são necessários ${ano} anos`);
