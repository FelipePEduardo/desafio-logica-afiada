/* 
  Playlist de Músicas em um App

  1. Capacidade de adicionar e remover músicas. ✅
  2. Mostrar todas as músicas da playlist. ✅
  3. Toda vez que uma música é adicionada, ela é colocada no início da playlist. ✅
  4. É possível mover a posição da música na playlist a qualquer momento. ✅
  5. Função para tocar toda a playlist do início ao fim. ✅
  6. Capacidade para tocar uma música da playlist ✅
  7. As músicas devem ter os seguintes atributos: ✅
    - Nome da música, nome do artista
    - Número de repoduções e Tempo total da música
  8. Cada vez que uma música é tocada é preciso incrementar o número de reproduções ✅
*/

const playlist = [];

function adicionarMusica(props) {
  const todasAsPropriedades =
    props.nomeMusica &&
    props.nomeArtista &&
    typeof props.tempoDaMusica === 'number';

  if (!todasAsPropriedades) {
    console.log('Está faltando propriedades');
    return;
  }

  playlist.unshift({ ...props, numeroReproducoes: 0 });
}

function removerMusica(nomeMusica) {
  if (!playlist.length) {
    console.log('Não há musicas cadastradas');
    return;
  }

  const indexMusica = playlist.findIndex(
    (musica) => musica.nomeMusica === nomeMusica
  );

  if (musicaExiste === -1) {
    console.log('Música não encontrada');
    return;
  }

  playlist.splice(indexMusica, 1);
}

function mostrarTodasAsMusicas() {
  return playlist.map((musica) => musica.nomeMusica).join(', ');
}

function moverPosicao(musica, posicao) {
  if (posicao > playlist.length - 1) {
    console.log('Posição inválida');
    return;
  }

  const indexMusica = playlist.findIndex(
    (music) => music.nomeMusica === musica
  );

  if (indexMusica === -1) {
    console.log('musica não encontrada');
    return;
  }

  const musicaASerMovida = playlist[indexMusica];
  playlist.splice(indexMusica, 1);
  playlist.splice(posicao, 0, musicaASerMovida);
}

function tocarPlaylist() {
  playlist.forEach((musica) => (musica.numeroReproducoes += 1));

  return mostrarTodasAsMusicas();
}

function tocarMusica(nomeMusica) {
  const musicaExiste = playlist.find(
    (musica) => musica.nomeMusica === nomeMusica
  );

  if (!musicaExiste) {
    console.log('Música não encontrada');
    return;
  }

  musicaExiste.numeroReproducoes += 1;
}

adicionarMusica({
  nomeMusica: 'Musica1',
  nomeArtista: 'Artista1',
  tempoDaMusica: 120,
});

adicionarMusica({
  nomeMusica: 'Musica2',
  nomeArtista: 'Artista2',
  tempoDaMusica: 120,
});

adicionarMusica({
  nomeMusica: 'Musica3',
  nomeArtista: 'Artista3',
  tempoDaMusica: 120,
});

console.log(playlist);
console.log(mostrarTodasAsMusicas());
tocarPlaylist();
moverPosicao('Musica2', 2);
console.log(playlist);
