/* 
  Crie uma função que utiliza o peso e a altura como parâmetros para calcular o IMC de uma pessoa
*/

function calcularIMC(peso, altura) {
  const resultado = peso / altura ** 2;
  console.log(`O IMC é ${resultado.toFixed(2)}`);
}

calcularIMC(71, 1.75);
