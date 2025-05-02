/* 
  Busca linear 
  - Percorrew todos os elementos de uma lista (ou array) um por um, do início ao fim, até encontrar o valor desejado ou até acabar a lista.

  Busca biária
  - Só funciona em listas ordenadas. Ela divide a lista ao meio repetidamente para eliminar metade dos elementos a cada passo, procurando o valor desejado de forma muito mais eficiente.
*/

// Busca Linear

const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela'];

function buscaLinear(lista, valor) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === valor) {
      return i;
    }
  }

  return -1;
}

console.log(buscaLinear(nomes, 'Carlos'));

function buscaLinearRecursiva(lista, valor, indice = 0) {
  if (indice >= lista.length) return -1;

  if (lista[indice] === valor) return indice;

  return buscaLinearRecursiva(lista, valor, indice + 1);
}

console.log(buscaLinearRecursiva(nomes, 'Carlos'));

// Busca Binária

const numeros = [10, 20, 30, 40, 50, 60];

function buscaBinaria(lista, valor) {
  let inicio = 0;
  let fim = lista.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (lista[meio] === valor) return meio;
    if (lista[meio] < valor) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1;
}

console.log(buscaBinaria(numeros, 40));
