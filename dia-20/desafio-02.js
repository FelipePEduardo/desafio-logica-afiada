/* 
  Realize uma busca linear utilizando recursividade, porém ao invés de retornar o indice do primeiro que foi encontrado, apenas retorne todos os indices que contém uma determinada palavra.

  - utlize a função toLowerCase para deixar todas as letras minúsculas
  - utilize a função includes
*/

const mensagens = [
  {
    nome: 'Ana',
    mensagem: 'Oi, você viu o relatório que mandei ontem?',
    telefone: '11999999999',
    data: '2025-04-01',
  },
  {
    nome: 'Bruno',
    mensagem: 'Vamos almoçar juntos amanhã?',
    telefone: '11988888888',
    data: '2025-04-15',
  },
  {
    nome: 'Carlos',
    mensagem: 'Segue o relatório atualizado.',
    telefone: '11977777777',
    data: '2025-04-20',
  },
  {
    nome: 'Daniela',
    mensagem: 'Relatório final enviado. Verifique!',
    telefone: '11966666666',
    data: '2025-04-20',
  },
  {
    nome: 'Vanessa Weber',
    mensagem: 'Está chegando ao fim do Desafio do Código Fonte TV',
    telefone: '12977445588',
    data: '2025-04-21',
  },
];

const listaIndices = [];

function buscaLinearRecursiva(lista, valor, index = 0) {
  if (index >= lista.length - 1) return listaIndices;

  const mensagem = lista[index].mensagem.toLowerCase();
  const valorMinusculo = valor.toLowerCase();

  if (mensagem.includes(valorMinusculo)) {
    listaIndices.push(index);
    console.log(listaIndices);
  }

  return buscaLinearRecursiva(lista, valor, (index += 1));
}

console.log(buscaLinearRecursiva(mensagens, 'relatório'));

listaIndices.forEach((indice) => {
  const mensagem = mensagens[indice];

  console.log(mensagem);
});
