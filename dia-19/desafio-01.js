/* 
  Crie um sistema que simula o cálculo do valor total de uma fatura de cartão de crédito.

  O sistema deve considerar compras feitas no cartão, sendo que algumas delas podem ser parceladas, e dentro de cada parcela pode ter sub-parcelas (compras dentro de compras).
  
  Utilize recursão para calcular o valor total de fatura, levando em consideração todas as compras, parcelas e sub-parcelas, até o nível mais profundo.
*/

const fatura = [
  {
    descricao: 'Celular',
    valor: 1200.0,
    parcelas: [
      { descricao: 'Seguro', valor: 100.0 },
      { descricao: 'Película', valor: 30.0 },
    ],
  },
  {
    descricao: 'Notebook',
    valor: 3000.0,
    parcelas: [
      {
        descricao: 'Assistência técnica',
        valor: 200.0,
        parcelas: [{ descricao: 'Visita técnica', valor: 50.0 }],
      },
    ],
  },
  {
    descricao: 'Livro',
    valor: 89.9,
  },
];

function valorTotal(fatura) {
  return fatura.reduce((acc, objeto) => {
    if (typeof objeto.valor === 'number') {
      acc += objeto.valor;
    }

    if (objeto.parcelas && Array.isArray(objeto.parcelas)) {
      acc += valorTotal(objeto.parcelas);
    }

    return acc;
  }, 0);
}

console.log(valorTotal(fatura));
