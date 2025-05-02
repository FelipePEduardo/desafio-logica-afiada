/* 
  Recrie o slice, fazendo o seu dá sua maneira.
*/

const list = ['javascript', 'typescript', 'sql'];

function slice(array, start = 0, end = list.length) {
  const internalList = [];

  if (start < 0) start = array.length + start;

  if (end < 0) end = array.length + end;

  for (let i = start; i < end && i < array.length; i++) {
    internalList.push(array[i]);
  }

  return internalList;
}

console.log('slice', slice(list, -1));
