/* Crie um código para simular transações Pix em uma conta bancária, utilizando as seguintes regras:

1. O limite diário para transferências (R$ 10.000), teremos um controle para saber o quanto já foi transferido no dia, um histório de transações por Pix e também um total já transferido por chave Pix.

2. Deverá implementar 2 operações Pix, um para enviar o Pix e outra para cancelar (reembolso).
  - Para isso você deve utilizar a chave pix, o valor a ser transferido e umam mensagem de referência.
  - Para cancelar, basta utilizar o índice da transação para facilitar.

3. A conta terá um limite máximo diário de R$ 10.000 para realizar Pix.

4. Existirá um total armazenado de todos os pix realizados para uma mesma chave totalPorChave.
  - Quando esse total ultrapassar o limite diário de Pix da conta essa chave estará liberada para receber transferências acima do limite diário, tendo como novo limite para transações o total já transferido para essa chave
  - Então se, por exemplo, a chave receber mais de R$ 10.000 no total ela desbloqueia esse limite para transferências futuras
*/

const conta = {
  saldo: 50000,
  limiteDiario: 10000,
  totalTransferidoHoje: 0,
  historicoTransacoes: [],
  totalPorChave: {}, // Armazena total transferido por chave Pix
};

function enviarPix(chavePix, valor, data, mensagem = '') {
  if (!conta.totalPorChave[chavePix]) {
    conta.totalPorChave[chavePix] = 0;
  }

  const totalParaEssaChave = conta.totalPorChave[chavePix];
  const limitePermitido =
    totalParaEssaChave > conta.limiteDiario
      ? totalParaEssaChave
      : conta.limiteDiario;

  // Calcula o total transferido hoje (com base no histórico)
  const totalHoje = conta.historicoTransacoes.reduce((acc, transacao) => {
    if (transacao.data === data && transacao.tipo === 'PIX') {
      acc += transacao.valor;
    }

    return acc;
  }, 0);

  // Validações
  if (totalHoje + valor > limitePermitido) {
    console.log(
      `❌ Limite diário de R$ ${limitePermitido.toFixed(2)} excedido para hoje.`
    );
    return;
  }

  if (conta.saldo < valor) {
    console.log('❌ Saldo insuficiente.');
    return;
  }

  // Realiza a transferência
  conta.saldo -= valor;
  conta.totalPorChave[chavePix] += valor;

  conta.historicoTransacoes.push({
    tipo: 'PIX',
    chavePix,
    valor,
    mensagem,
    data,
  });

  console.log(
    `✅ Pix de R$${valor.toFixed(2)} enviado para ${chavePix} em ${data}.`
  );
}

function cancelarPix(indiceTransacao) {
  const transacao = conta.historicoTransacoes[indiceTransacao];

  if (!transacao || transacao.tipo !== 'PIX') {
    console.log('❌ Transação inválida para cancelamento.');
    return;
  }

  const { chavePix, valor, data } = transacao;

  // Estorna o valor
  conta.saldo += valor;

  // Atualiza total por chave
  conta.totalPorChave[chavePix] -= valor;

  // Registra o reembolso
  conta.historicoTransacoes.push({
    tipo: 'REEMBOLSO',
    chavePix,
    valor,
    mensagem: 'Reembolso de Pix',
    data,
  });

  console.log(
    `↩️ Pix cancelado. Valor de R$${valor.toFixed(2)} devolvido para a conta.`
  );
}

// ENVIO DE PIX

enviarPix('chave_vanessa', 4000, '2025-04-10', 'Compra de equipamento');
enviarPix('chave_vanessa', 5000, '2025-04-10', 'Serviço');
enviarPix('chave_vanessa', 2000, '2025-04-10', 'Extra'); // Excederá limite diário

enviarPix('chave_vanessa', 3000, '2025-04-11', 'Nova transação'); // Novo dia

// Acumulando para liberar o limite por chave:
enviarPix('chave_gabriel', 6000, '2025-04-12', 'Pagamento 1');
enviarPix('chave_gabriel', 5000, '2025-04-12', 'Pagamento 2'); // Deve bloquear

enviarPix('chave_gabriel', 10000, '2025-04-13', 'Pagamento 3'); // Limite diário (limite da chave agora é 16000)
enviarPix('chave_gabriel', 16000, '2025-04-14', 'Pagamento 4'); // Deve passar

console.log('\n💰 Saldo Final:', conta.saldo);
console.log('📄 Histórico de Transações:');
console.table(conta.historicoTransacoes);

console.log('📊 Total por chave:');
console.log(conta.totalPorChave);

// CANCELAMENTO

console.log('\n🧾 Cancelando a transação 1, 4 e 5:');
cancelarPix(1); // Índice 1 da transação original de Pix
cancelarPix(4); // Índice 4 da transação original de Pix
cancelarPix(5); // Índice 5 da transação original de Pix

enviarPix('chave_gabriel', 16000, '2025-04-15', 'Pagamento 4'); // Não Deve passar

console.log('\n💰 Saldo Atual após cancelamento:', conta.saldo);
console.log('📄 Histórico Atualizado:');
console.table(conta.historicoTransacoes);

console.log('📊 Total por chave atualizado:');
console.log(conta.totalPorChave);
