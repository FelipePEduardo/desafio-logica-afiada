// Criando o nó da lista encadeada
function criarNo(elemento) {
  return {
    data: elemento,
    next: null,
  };
}

function acharFinalDaLista(objeto) {
  if (objeto.next) {
    return acharFinalDaLista(objeto.next);
  } else {
    return objeto;
  }
}

function acharElemento(lista, elemento) {
  if (lista.data === elemento) {
    return elemento;
  } else {
    return acharElemento(lista.next, elemento);
  }
}

// Criando a estrutura básica da lista encadeada
let listaEncadeada = {
  head: null,

  insertFirst: function (elemento) {
    const novoNo = criarNo(elemento);

    if (!this.head) {
      this.head = novoNo;
    } else {
      novoNo.next = this.head;
      this.head = novoNo;
    }

    return elemento;
  },

  insertLast: function (elemento) {
    const novoNo = criarNo(elemento);

    if (!this.head) {
      this.head = novoNo;
    } else {
      const finalDaLista = acharFinalDaLista(this.head);
      finalDaLista.next = novoNo;
    }

    return elemento;
  },

  insertAt: function (elemento, posicao) {
    const novoNo = criarNo(elemento);

    if (posicao === 0) {
      novoNo.next = this.head;
      this.head = novoNo;
      return;
    }

    let atual = this.head;
    let anterior = null;
    let contador = 0;

    while (contador < posicao && atual) {
      anterior = atual;
      atual = atual.next;
      contador++;
    }

    if (contador === posicao) {
      anterior.next = novoNo;
      novoNo.next = atual;
    } else {
      console.log('Posição inválida');
      return;
    }
  },

  deleteAt: function (posicao) {
    if (!this.head) {
      console.log('A lista está vazia');
      return;
    }

    if (posicao === 0) {
      this.head = this.head.next;
    }

    let atual = this.head;
    let anterior = null;
    let contador = 0;

    while (contador < posicao && atual) {
      anterior = atual;
      atual = atual.next;
      contador++;
    }

    if (atual) {
      anterior.next = atual.next;
    } else {
      console.log('Posição inválida');
      return;
    }
  },

  searchAt: function (posicao) {
    if (!this.head) {
      console.log('A lista está vazia');
      return;
    }

    let contador = 0;
    let atual = this.head;

    while (contador < posicao && atual) {
      atual = atual.next;
      contador++;
    }

    if (!atual) {
      console.log('Posição inválida');
      return;
    }

    return atual;
  },

  traversal: function () {
    if (!this.head) {
      console.log('A lista está vazia');
      return;
    }

    let atual = this.head;
    const nos = [];

    while (atual) {
      nos.push(atual.data);
      atual = atual.next;
    }

    return nos;
  },

  indexOf: function (elemento) {
    if (!this.head) {
      console.log('A lista está vazia');
      return;
    }

    let contador = 0;
    let atual = this.head;

    while (atual) {
      if (atual.data === elemento) {
        return contador;
      }
      atual = atual.next;
      contador++;
    }

    return -1;
  },
};

listaEncadeada.insertFirst('Trem1');
listaEncadeada.insertFirst('Trem2');
listaEncadeada.insertFirst('Trem3');
listaEncadeada.insertLast('Trem4');
console.dir(listaEncadeada.head, { depth: null });

console.log('insert At');
listaEncadeada.insertAt('Trem5', 2);
console.dir(listaEncadeada.head, { depth: null });

console.log('antes do delete');
console.dir(listaEncadeada.head, { depth: null });
listaEncadeada.deleteAt(2);
console.log('depoist do delete');
console.dir(listaEncadeada.head, { depth: null });

console.log('Search at', listaEncadeada.searchAt(2));

console.log('Quantidades de itens na lista', listaEncadeada.traversal());

console.log('O index do item é', listaEncadeada.indexOf('Trem1'));

/* 
Terminar de implementar as outras funções que estão faltando para trabalhar com lista encadeada como:

- insertLast que inclui um nó no final da lista; ✅
- insertAt que inclui um nó em uma determinada posição; ✅
- deleteAt que exclui um nó em uma determinada posição; ✅ 
- searchAt que encontra um nó de acordo com a posição; ✅
- traversal que percorre todos os nós; ✅
- indexOf que retorna a posição de acordo com o elemento do nó
*/
