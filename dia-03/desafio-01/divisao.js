// Divisão
/* 
 1. Calcule a média de 4 notas
 2. Converta a distância de metros para quilômetros
*/
console.log('// Divisão');
/* 1 */
const notas = [10, 8, 6, 9.5];
const totalDeNotas = notas.reduce((acc, nota) => acc += nota, 0)
console.log(`A média de notas é de: ${totalDeNotas / notas.length}`)

/* 2 */
const distanciaEmMetros = 1000;
const valorDaConversaoQuilometrosParaMetros = 1000;
console.log(
  `O valor convertido em quilômetros é de: ${
    distanciaEmMetros / valorDaConversao
  } km`
);