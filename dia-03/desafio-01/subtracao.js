// Subtração
/* 
 1. Imagine que você tem algumas variáveis com compras no cartão de crédito, e uma com um valor a ser estornado de uma compra errada, calcule o total da fatura atualizado.
 2. Calcule a sua idade a partir de duas variáveis contendo o ano de nascimento e o ano atual.
 3. Imagine que em um jogo você tenha um total de moedas e para cada vez que você compra um artefator voc6e gasta um determinado número de moedas. Calcule a quantidade final de moedas.
*/
console.log('// Subtração');
/* 1 */
const compra1 = 250;
const compra2 = 150;
const valorASerEstornado = 100;
console.log(`Valor da fatura: R$${compra1 + compra2 - valorASerEstornado}`);
/* 2 */
const anoNascimento = 2001;
const anoAtual = 2025;
console.log(`A idade é de: ${anoAtual - anoNascimento}`);
/* 3 */
const totalMoedas = 2000;
const artefato1 = 100;
const artefato2 = 250;
console.log(
  `O novo total de moedas é de ${totalMoedas - artefato1 - artefato2}`
);
