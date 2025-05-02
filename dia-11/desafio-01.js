/* 
  1. Pilha de voltar
  Quando você navega de uma página para outra, a página atual é empurrada (pushed) para a pilha de voltar.
  Se você continuar navegando por várias páginas, elas serão empilhadas em ordem. 
  Quando você clica no botão "voltar", o topo da pilha de voltar é retirado (popped) e a página é exibida.

  2. Pilha de avançar
  Quando você clica em "voltar", a página da qual você voltou é empurrada para uma pilha avançar. 
  Se você clilcar e, "avançar", você tira (pop) da pilha de avançar e navega para essa página.
  
  I. Crie 3 funções, uma que controla o voltar, uma para avançar e outra para navegar para um endereço.
  II. Controle a partir de 2 pilhas e uma variável que armazena o endereço da página atual.
*/

let pilhaVoltar = [];
let pilhaAvancar = [];
let paginaAtual = '';

function voltar() {
  if (!pilhaVoltar.length) {
    console.log('Não é possível voltar');
    return;
  }

  pilhaAvancar.push(paginaAtual);
  paginaAtual = pilhaVoltar.pop();

  console.log('Voltar', { paginaAtual, pilhaVoltar, pilhaAvancar });
}

function avancar() {
  if (!pilhaAvancar.length) {
    console.log('Não é possível avançar');
    return;
  }

  pilhaVoltar.push(paginaAtual);
  paginaAtual = pilhaAvancar.pop();

  console.log('Avançar', { paginaAtual, pilhaVoltar, pilhaAvancar });
}

function navegar(pagina) {
  if (paginaAtual.length) {
    pilhaVoltar.push(paginaAtual);
    pilhaAvancar = [];
  }

  paginaAtual = pagina;
  console.log('Pagina atual', paginaAtual);
}

navegar('youtube.com');
navegar('youtube.com/video');
navegar('youtube.com/video2');
voltar();
voltar();
avancar();
