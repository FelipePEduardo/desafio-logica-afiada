/* 
  Suponha que você está planejando uma viagem de carro. 
  Seu carro faz 12 km por litro de gasolina, e você quer calcular o número de litros de combustível que você precisará para a viagem, como o custo total de combustível. 
*/

/* 
  - Distância total da viagem em quilômetros 
  - Preço do litro de gasolina em reais
*/


/* 
  - Quantos litros de gasolina serão necessários para a viagem (considerando que o carro faz 12 km por litro) 
  - Quanto vai custar para abastecer o carro para a viagem
*/

(function calculatarDistanciaECusto(distanciaViagem) {
  const quilometroPorLitro = 12
  const precoGasolina = 6.31
  const litrosDeCombustivel = distanciaViagem / quilometroPorLitro
  const valorTotalGasolina = litrosDeCombustivel * precoGasolina

  console.log(`Para uma viagem de ${distanciaViagem} km será necessário ${litrosDeCombustivel.toFixed(2)} de litros de combustível`)
  console.log(`Você irá gastar um total de ${valorTotalGasolina.toFixed(2)}`)
})(120)