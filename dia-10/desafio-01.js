/* 
  Principais operações de uma pilha -> Pilha utiliza o método LIFO -> last in first out
  - Push
  - Pop
  - Top ou Peek -> retorna o item que está no topo
  - isEmpty
  - isFull

  Na linha de produção, um braço mecânico automatizado é encarregado de pegar produtos individuais que chegam através de uma esteira e empilha-lás em caixas para o envio.
  Cada caixa pode conter até no máximo 10 produtos.
  Uma vez que a caixa está cheia, ela é enviada para ser selada e despachada.

  Empilhar. O braço mecânico pega um produto da esteira e o coloca no topo da pilha atual
  Verificar a Capacidade. Antes de empilhar um novo produto, o sistema verifica se a pilha já contém 10 produtos.
  Criar uma nova pilha. Uma vez que a pilha atinge 10 produtos, ela é enviada para o próximo estágio do processo (selagem e despacho), e uma nova pilha vazia é inciada para os próximos produtos.

  Fazer um loop com a chegada de mais de 20 produtos para simular a chegada de 2 caixas
*/

let list = [];

function stackProducts(array, product) {
  const maxProducts = 10;

  if (array.length === maxProducts) {
    console.log('A pilha está cheia!');
    array = [];
    array.push(product);
    console.log(`O produto ${product} foi adicionado em uma nova pilha`);
  } else {
    array.push(product);
    console.log(`O produto ${product} foi adicionado na pilha`);
  }
}

(function production(array) {
  const stackMax = 20;

  for (let i = 0; i <= stackMax; i++) {
    stackProducts(array, `Produto ${i}`);
  }
})(list);
