/* 
  Bubble Sort (ordenação por bolha)
  - Simples
  - Percorre o array várias vezes, sempre do início ao penúltimo elemento comparando e trocando os elementos vizinhos de posição até que todos estejam ordenados.
  - Só serve para listas pequenas porque precisa percorrer o array todo várias vezes
*/

/** This is a description for the bubble sort function
 @param {number[]} array must be an arry of numbers
 @returns {number[]} ordered numbers array
*/
function bubbleSort(array) {
  let trocado;

  do {
    trocado = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        trocado = true;
      }
    }
  } while (trocado);

  return array;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));
