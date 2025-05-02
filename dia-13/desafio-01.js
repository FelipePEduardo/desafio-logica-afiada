/* 
  Crie um controle que gerencia tarefas com prioridade.
  O objetivo é simular um ambiente onde tarefas urgentes podem surgir a qualquer momento, exigindo reorganização rápida e eficiente da fila de tarefas.

  Deque -> é uma estrutura de dado que permite inserção e remoção tanto no início quanto no final

  Objetivos do desafio:
  - Implementar um Deque para Tarefas, que permitam a inserção e remoção tanto no início quanto no final da lista
  - Manipulação das Prioridades, implementar duas funções que permitam aumentar e diminuir a prioridade de uma tarefa específica dentro do deque 
  - Testar com cenários realistas
*/

const tarefas = [];

function inserirInicio(tarefa) {
  tarefas.unshift(tarefa);
  console.log(`Tarefa adicionada ${tarefa.nome}`);
}

function inserirFinal(tarefa) {
  tarefas.push(tarefa);
  console.log(`Tarefa adicionada ${tarefa.nome}`);
}

function removerInicio() {
  if (!tarefas.length) {
    console.log(`Não há tarefas para remover`);
    return;
  }
  const tarefaRemovida = tarefas.shift();
  console.log(`Tarefa removida ${tarefaRemovida.nome}`);
}

function removerFinal() {
  if (!tarefas.length) {
    console.log(`Não há tarefas para remover`);
    return;
  }
  const tarefaRemovida = tarefas.pop();
  console.log(`Tarefa removida ${tarefaRemovida.nome}`);
}

function reorganizar() {
  tarefas.sort((a, b) => a.prioridade - b.prioridade);
}

function aumentarOuDiminuirPrioridade(tarefaParaAtualizar) {
  const indexTarefa = tarefas.findIndex(
    (tarefa) => tarefa.nome === tarefaParaAtualizar.nome
  );

  if (indexTarefa === -1) {
    console.log(`A tarefa ${tarefaParaAtualizar.nome} não foi encontrada`);
    return;
  }

  tarefas[indexTarefa] = {
    nome: tarefaParaAtualizar.nome,
    prioridade: tarefaParaAtualizar.prioridade,
  };

  reorganizar();
}

inserirInicio({ nome: 'Tarefa 01', prioridade: 1 });
inserirFinal({ nome: 'Tarefa 02', prioridade: 2 });
inserirFinal({ nome: 'Tarefa 03', prioridade: 3 });
inserirInicio({ nome: 'Tarefa 04', prioridade: 4 });

console.log(tarefas);

removerInicio();
removerFinal();

inserirFinal({ nome: 'Tarefa 05', prioridade: 3 });

console.log(tarefas);

aumentarOuDiminuirPrioridade({ nome: 'Tarefa 05', prioridade: 1 });

console.log(tarefas);
