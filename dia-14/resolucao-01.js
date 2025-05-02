let filasCaixas = {
  caixa1: [],
  caixa2: [],
  caixa3: [],
  caixa4: [],
  caixa5: [],
  caixa6: [],
  caixa7: [],
  caixa8: [],
  caixa9: [],
  caixa10: [],
};

function entrarNaFila(caixa, nome) {
  if (filasCaixas[caixa]) {
    // O código abaixo é a mesma coisa que um array.push()
    filasCaixas[caixa][filasCaixas[caixa].length] = nome;

    console.log(`${nome} entrou na fila do ${caixa}.`);
  } else {
    console.log(`O caixa ${caixa} não existe`);
  }
}

function atenderCliente(caixa) {
  if (filasCaixas[caixa] && filasCaixas[caixa].length > 0) {
    let clienteAtendido = filasCaixas[caixa][0];

    for (let i = 1; i < filasCaixas[caixa].length; i++) {
      // Removemos o primeiro cliente manualmente
      filasCaixas[caixa][i - 1] = filasCaixas[caixa][i];
    }
    filasCaixas[caixa].length -= 1; // Reduz o tamanho da fila
    console.log(`${clienteAtendido} foi atendido no ${caixa}.`);
  } else if (filasCaixas[caixa]) {
    console.log(`A fila do ${caixa} está vazia`);
  } else {
    console.log(`O ${caixa} não existe`);
  }
}

function mostrarFila() {
  console.log('Estado das filas:');

  for (let caixa in filasCaixas) {
    if (filasCaixas[caixa].length > 0) {
      console.log(`${caixa}: ${filasCaixas[caixa].join(', ')}`);
    } else {
      console.log(`${caixa}: A fila está vazia.`);
    }
  }
}

entrarNaFila('caixa1', 'João');
entrarNaFila('caixa2', 'Maria');
entrarNaFila('caixa3', 'Pedro');
entrarNaFila('caixa2', 'Ana');
entrarNaFila('caixa1', 'Carlos');

mostrarFila();

atenderCliente('caixa1');
atenderCliente('caixa2');
atenderCliente('caixa3');

mostrarFila();

atenderCliente('caixa3');

mostrarFila();
