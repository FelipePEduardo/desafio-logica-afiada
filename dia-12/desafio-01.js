/* 
  Fila -> Utiliza o método FIFO -> First in, first out

  Criar uma fila de atendimento de clientes em uma cafeteria Drive Through. 
  Todo atendimento é realizado a partir de carros que vão entrando no estacionamento da cafeteria e recebendo os pedidos a partir de um totem eletrônico
*/

const pedidos = [];

function receberPedido(pedido) {
  pedidos.push(pedido);
  console.log(`Pedido ${pedido} recebido`);
}

function atenderPedido() {
  if (!pedidos.length) {
    console.log(`Não há pedidos`);
    return;
  }

  const pedidoAtendido = pedidos.shift();
  console.log(`O pedido: ${pedidoAtendido}, foi atendido`);
}

function statusPedidos() {
  console.log(`Há um total de ${pedidos.length} pedidos`);

  if (pedidos.length > 0) {
    console.log(`Ainda faltam o(s) pedido(s) ${pedidos.join(', ')}`);
  }
}

receberPedido('Batata');
receberPedido('Hamburguer');
receberPedido('Sorvete');

atenderPedido();

statusPedidos();

atenderPedido();
atenderPedido();
