/* Ordenar produtos por preço */

const produtos = [
  ['Arroz', 25.99],
  ['Feijão', 12.5],
  ['Leite', 6.49],
  ['Óleo', 8.99],
  ['Pão', 7.0],
  ['Café', 15.3],
  ['Açúcar', 4.89],
  ['Sal', 3.25],
  ['Macarrão', 5.79],
  ['Manteiga', 9.99],
];

function bubbleSort(array) {
  let trocado;
  let arrayInterno = [...array];

  do {
    trocado = false;
    for (let i = 0; i < arrayInterno.length - 1; i++) {
      if (arrayInterno[i][1] > arrayInterno[i + 1][1]) {
        let temp = arrayInterno[i];
        arrayInterno[i] = arrayInterno[i + 1];
        arrayInterno[i + 1] = temp;
        trocado = true;
      }
    }
  } while (trocado);

  return arrayInterno;
}

console.log('bubbleSort');
console.table(bubbleSort(produtos));

function selectionSort(array) {
  let arrayInterno = [...array];

  for (let i = 0; i < arrayInterno.length - 1; i++) {
    let minIndex = i;

    for (let x = i + 1; x < arrayInterno.length; x++) {
      if (arrayInterno[x][1] < arrayInterno[minIndex][1]) {
        minIndex = x;
      }
    }

    const temp = arrayInterno[i];
    arrayInterno[i] = arrayInterno[minIndex];
    arrayInterno[minIndex] = temp;
  }

  return arrayInterno;
}

console.log('selectionSort');
console.table(selectionSort(produtos));
