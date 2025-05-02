/* 
  Vamos retomar o desafio de controle de filas de supermercado, mas agora com a diferença de que temos várias filas ao mesmo tempo, uma para cada caixa.

  O objetivo é simular um supermercado com diversos caixas, cada um com sua fila de clientes.

  - Um cliente pode ser adicionado a uma das filas (caixas).
  - O cliente é atendido e removido da fila correspondente.
*/

const caixas = new Array(10).fill(0).reduce((acc, item, index) => {
  const key = `caixa${index + 1}`;
  const object = {
    [key]: [],
  };

  acc = { ...acc, ...object };

  return acc;
}, {});

function adicionarClienteNaFila(caixa, nomeCliente) {
  caixas[caixa].push(nomeCliente);
  console.log(`Cliente ${nomeCliente} adicionado na fila ${caixa}.`);
}

function atenderClienteNaFila(caixa) {
  const clienteAtendido = caixas[caixa].shift();
  console.log(`Cliente ${clienteAtendido} antendido no ${caixa}`);
}

function mostrarCaixas() {
  console.log(caixas);
}

for (let caixa in caixas) {
  adicionarClienteNaFila(caixa, 'Cliente1');
  adicionarClienteNaFila(caixa, 'Cliente2');
  adicionarClienteNaFila(caixa, 'Cliente3');

  mostrarCaixas();

  atenderClienteNaFila(caixa);

  mostrarCaixas();
}
