/* Crie um código para simular transações Pix em uma conta bancária, utilizando as seguintes regras:

1. O limite diário para transferências (R$ 10.000), teremos um controle para saber o quanto já foi transferido no dia, um histório de transações por Pix e também um total já trnsferido por chave Pix.

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
