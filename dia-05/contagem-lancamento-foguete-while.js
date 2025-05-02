/* 
Faça a contagem regressiva a partir de 10 até o lançamento de um foguete

Ao chegar nos últimos 3 segundos, é importante dar um aviso, então inclua o texto "Atenção!" junto à contagem. Quando a contagem terminar mostre a mensagem: "Lançamento do foguete!"

*/

let contagemEmSegundos = 10;

while (contagemEmSegundos >= 0) {
  if (contagemEmSegundos <= 3) {
    console.log(`Atenção! Faltam ${contagemEmSegundos} segundos`);
  } else {
    console.log(contagemEmSegundos);
  }

  contagemEmSegundos--;
}

console.log('Lançamento do foguete!');
