const peso = 75
const altura = 1.75
const imc = peso / (altura ** 2)

if(imc < 18.5) {
  console.log('Você está abaixo do peso')
} else if(imc >= 18.5 && imc < 24.9) {
  console.log('Peso normal')
} else if(imc >= 24.9 && imc < 29.9)  {
  console.log('Sobrepeso')
} else {
  console.log('Obesidade')
}