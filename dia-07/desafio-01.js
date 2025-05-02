/* 
  Crie uma aplicação simples quem simule a gestão de duas contas bancárias. 
  Para isso, você precisará criar variáveis para controlar o saldo das contas e o limite de crédito. A lógica deve incluir:

  - Criar duas variáveis que controlam o saldo de duas contas bancárias, as contas compartilham de um limite, que também será outra variável porém começa com 0.
  - A partir do momento que o saldo total das contas atingir 1000 o limite será de 10%

  1. Calcular o saldo  total das contas. ✅
  2. Exibir um alerta se alguma conta estiver sem saldo ou utilizando o limite.✅
  3. Permitir depósito em uma das contas. ✅
  4. Permitir débitos em uma das contas. ✅
  5. Permitir transferências de uma conta para outra, desde que a haja saldo disponível. ✅
  6. Converta o saldo de reais (R$) para dólares (US$). ✅
  7. Exibir o limite disponível das contas. ✅

  Se ao efetuar o depósito em uma conta e ela estiver utilizando um limite desconte do valor a ser depositado 15% ✅
*/

let saldoConta1 = 200;
let saldoConta2 = 200;

let limite = 0;
let jurosLimite = 0;
const percentualDoLimite = 0.1;
const saldoMinimoLimite = 1000;

const taxaDeConversão = 5.81;

const hashConta = {
  1: { saldo: saldoConta1 },
  2: { saldo: saldoConta2 },
};

function calcularSaldoTotal() {
  let total = saldoConta1 + saldoConta2;

  if (total >= saldoMinimoLimite) {
    limite = total * percentualDoLimite;
  }

  return total;
}

function alertaSaldo() {
  if (saldoConta1 <= 0) {
    console.log('Conta 1 está sem saldo ou utilizando o limite');
  }

  if (saldoConta2 <= 0) {
    console.log('Conta 2 está sem saldo ou utilizando o limite');
  }
}

function depositar(conta, valor) {
  if (hashConta[conta] && hashConta[conta].valor > 0) {
    hashConta[conta].valor += valor;
    return;
  }

  if (hashConta[conta] && hashConta[conta].valor < 0) {
    jurosLimite += valor * 0.15;
    valor *= 0.85;
    hashConta[conta].valor += valor;
  }
}

function debitar(conta, valor) {
  if (hashConta[conta] && valor <= hashConta[conta].valor + limite) {
    hashConta[conta].valor -= valor;
  } else {
    console.log(`Saldo insuficiente na conta ${conta}`);
  }
}

function transferencia(valor, contaOrigem, contaDestino) {
  if (hashConta[contaOrigem] && valor <= hashConta[contaOrigem].valor) {
    debitar(contaOrigem, valor);
    depositar(contaDestino, valor);
  } else {
    console.log(`Saldo insuficiente para transferência na conta ${origem}`);
  }
}

function converterSaldoParaDolar(conta) {
  if (hashConta[conta]?.valor) {
    return hashConta[conta].valor / taxaDeConversão;
  }
}
