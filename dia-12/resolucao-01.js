/* 
  Criar uma fila de atendimento de clientes em uma cafeteria Drive Through. 
  Todo atendimento é realizado a partir de carros que vão entrando no estacionamento da cafeteria e recebendo os pedidos a partir de um totem eletrônico
*/

const filaDriveThru = [];

function entrarNaFila(placaDoCarro, pedido) {
  filaDriveThru.push({ placaDoCarro, pedido });
  console.log(`Carro ${placaDoCarro}, entrou na fila com o pedido ${pedido}`);
}

function atenderCarro() {
  if (!filaDriveThru.length) {
    console.log('Não á carros na fila');
    return;
  }

  const carroAtendido = filaDriveThru.shift();
  console.log(
    `Carro ${carroAtendido.placaDoCarro}, com o pedido: ${carroAtendido.pedido} foi atendido`
  );
}

function statusFila() {
  console.log(`Total de carros na fila: ${filaDriveThru.length}`);

  if (filaDriveThru.length) {
    console.log(
      `Fila atual: ${filaDriveThru
        .map((carro) => carro.placaDoCarro)
        .join(', ')}`
    );
  }
}

entrarNaFila('abc123', 'batata');
entrarNaFila('abc456', 'sorvete');
entrarNaFila('abc789', 'hamburguer');

atenderCarro()

statusFila()

atenderCarro()
atenderCarro()

statusFila()