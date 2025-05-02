/* 
  Selection Sort (ordenação por seleção)
  - Percorre o array repetidamente e sempre selecionar o menor valor para coloca-lo na posição correta
*/

/** This is a description for the selection sort function
 @param {number[]} array must be an arry of numbers
 @returns {number[]} ordered numbers array
*/
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let x = i + 1; x < array.length; x++) {
      if (array[x] < array[minIndex]) {
        minIndex = x;
      }
    }

    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

console.log(selectionSort([5, 3, 8, 4, 2]));
