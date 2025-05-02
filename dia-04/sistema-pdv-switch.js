/* 
  Crie um código usando switch que calcule e imprima o valor final do producto após a aplicação do desconto, com base no tipo do produto.
  O desconto é dado com base no tipo do produto:
*/

/* 
 1- "Alimentos" têm um descondo de 5%;
 2- "Eletrônicos" têm um descondo de 10%;
 3- "Roupas" têm um descondo de 20%;
 4- "Livros" têm um descondo de 50%;
 5- Se o tipo do producto não tiver na lista, não há desconto;
*/

(function imprimeDesconto(tipoProduto, precoProduto) {
  let desconto = 0;

  switch (tipoProduto) {
    case 'Alimentos':
      desconto = 0.05;
      break;
    case 'Eletrônicos':
      desconto = 0.1;
      break;
    case 'Roupas':
      desconto = 0.2;
      break;
    case 'Livros':
      desconto = 0.5;
      break;
    default:
      desconto;
  }

  const precoComDesconto = precoProduto - precoProduto * desconto;

  console.log(`O preço do produto é de ${precoComDesconto}`);
})('Livros', 100);
