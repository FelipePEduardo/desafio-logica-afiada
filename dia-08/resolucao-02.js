const fila = [];

function entrarNaFila(nome) {
  fila[fila.length] = nome; // Isso é equivalente a fila.push(nome)
  console.log(`${nome} entrou na fila`);
}

function atenderCliente() {
  if (fila.length > 0) {
    let clienteAtendido = fila[0];
    // remover primeiro cliente manualmente
    for (let i = 0; i < fila.length; i++) {
      fila[i - 1] = fila[i];
    }
    fila.length = fila.length - 1; // Isso é equivalente a fila.shift()
    console.log(`${clienteAtendido} foi antendido.`);
  } else {
    console.log('Não há clientes na fila para atender.');
  }
}

function mostrarFila() {
  if (fila.length > 0) {
    console.log(`Clientes na fila ${fila.join(', ')}`);
  } else {
    console.log('A fila está vazia');
  }
}

entrarNaFila('Felipe');
entrarNaFila('Maria');
entrarNaFila('João');

mostrarFila();
atenderCliente();
mostrarFila();
