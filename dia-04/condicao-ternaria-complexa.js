/* 
  Escreva um código que determina se o cliente pode fazer compras em sua conta. As condições para poder comprar são: 
*/

/* 
 1- Conta precisa estar ativa;
 2- Saldo deve ser maior que 500;
 3- Use a condição ternária para fazer isso;
*/

(function condicaoTernaria(statusConta, saldo) {
  const podeFazerCompra = statusConta === 'ativa' && saldo > 500;

  console.log(podeFazerCompra);
})('ativa', 7000);
