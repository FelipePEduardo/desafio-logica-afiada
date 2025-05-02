/* 
  Reescrever as funções indexOf, includes e o lastIndexOf no JavaScript.
*/

const list = ['javascript', 'sql'];

function indexOf(array, element) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      index = i;
      break;
    }
  }

  return index;
}

console.log('indexOf', indexOf(list, 'sql'));

function includes(array, element) {
  let itemExists = false;

  for (const item of array) {
    if (item === element) {
      itemExists = true;
      break;
    }
  }

  return itemExists;
}

console.log('includes', includes(list, 'javascript'));

function lastIndexOf(array, element) {
  let index = -1;
  array.push('javascript');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      index = i;
    }
  }

  return index;
}

console.log('lastIndexOf', lastIndexOf(list, 'javascript'));
