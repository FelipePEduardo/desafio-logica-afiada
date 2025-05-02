/* 
  Transforme o código que criamos no dia 04 sobre os dias da semana em uma função chamada obterDiaDaSemana.
  Receba um número que representa o dia da semana que vai de 1 a 7 e retorna esse dia por extenso.
  Utilizando o switch
*/

/* switch */
function obterDiaDaSemana(dia) {
  let nomeDoDia = '';
  switch (dia) {
    case 1:
      nomeDoDia = 'Domingo';
      break;
    case 2:
      nomeDoDia = 'Segunda-feira';
      break;
    case 3:
      nomeDoDia = 'Terça-feira';
      break;
    case 4:
      nomeDoDia = 'Quarta-feira';
      break;
    case 5:
      nomeDoDia = 'Quinta-feira';
      break;
    case 6:
      nomeDoDia = 'Sexta-feira';
      break;
    case 7:
      nomeDoDia = 'Sábado';
      break;
    default:
      nomeDoDia = 'Dia inválido'; 
      break;
  }

  console.log(nomeDoDia);
}

(function obterDiaDaSemanaV2(dia) {
  const diasHashMap = {
    1: 'Domingo',
    2: 'Segunda-feira',
    3: 'Terça-feira',
    4: 'Quarta-feira',
    5: 'Quinta-feira',
    6: 'Sexta-feira',
    7: 'Sábado',
  };

  console.log(diasHashMap[dia] ?? `Dia Inválido`);
})(2);
