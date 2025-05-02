/* 
  Implemente a busca binária de um array de números, porém utilizando recursividade, assim como mostramos na busca linear.

  Teste também com um array com nomes para ver como funcionará.
*/

function buscaBinariaRecursiva(
  lista,
  valor,
  inicio = 0,
  fim = lista.length - 1
) {
  if (inicio > fim) return -1;

  const meio = Math.floor((inicio + fim) / 2);

  if (lista[meio] === valor) return meio;

  if (valor < lista[meio]) {
    return buscaBinariaRecursiva(lista, valor, inicio, meio - 1);
  }

  return buscaBinariaRecursiva(lista, valor, meio + 1, fim);
}

const numeros = [10, 20, 30, 40, 50, 60];
console.log(buscaBinariaRecursiva(numeros, 40));

const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela'];
console.log(buscaBinariaRecursiva(nomes, 'Carlos'));
