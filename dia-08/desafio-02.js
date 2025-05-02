/* 
  Crie um código que simule uma fila de supermercado.
  Comece com uma fila simples de um único caixa e, posteriormente, expanda para simular a fila em diversos caixas.
  Considere operações como adicionar clientes à fila e atende-lôs (remover clientes da fila).

  Lembre-se de que para sair da fila, os clientes são atendidos em ordem, e você pode usar operações de array para gerenciar isso.
*/

const filaUnica = ['João', 'Pedro'];

function adicionarCliente(fila, nomeCliente) {
  if (typeof nomeCliente !== 'string') console.log('Nome Inválido');

  fila.push(nomeCliente);
}

function atenderCliente(fila, nomeCliente) {
  if (typeof nomeCliente !== 'string') console.log('Nome Inválido');

  const indexCliente = fila.findIndex((cliente) => cliente === nomeCliente);

  if (indexCliente > -1) fila.splice(indexCliente, 1);
}

(function simularFila(fila) {
  let quantidadeDePessoasAtendidas = 0;
  console.log('Fila inicial', fila);

  adicionarCliente(fila, 'Felipe');
  console.log('Cliente Adicionado', fila);
  for (let cliente = 0; cliente < fila.length; ) {
    const clienteAtual = fila[cliente];

    atenderCliente(fila, clienteAtual);
    console.log('Cliente Atendido', clienteAtual);

    console.log('fila', fila);
    quantidadeDePessoasAtendidas++;
  }

  console.log('Número de pessoas atendidas', quantidadeDePessoasAtendidas);
})(filaUnica);
