/* 
  Ordenando a playlist

  Na playlist de músicas do dia 16 utilize os algorítimos para ordenar a playlist pelo título da música e também pelo número de reproduções.

  Obs: Ordene por título utilizando o Bobble Sort e por número re reproduções utilizando o Selection Sort.
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

function ordenarPorNome(array) {
  let estaOrdenado;
  const arrayInterno = [...array];

  do {
    estaOrdenado = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (arrayInterno[i].nomeMusica > arrayInterno[i + 1].nomeMusica) {
        let temp = arrayInterno[i];
        arrayInterno[i] = arrayInterno[i + 1];
        arrayInterno[i + 1] = temp;
        estaOrdenado = true;
      }
    }
  } while (estaOrdenado);

  return arrayInterno;
}

function orderNarPorReproducoes(array) {
  const arrayInterno = [...array];

  for (let i = 0; i < arrayInterno.length - 1; i++) {
    let indexAtual = i;

    for (let x = i + 1; x < arrayInterno.length; x++) {
      if (
        arrayInterno[x].numeroReproducoes >
        arrayInterno[indexAtual].numeroReproducoes
      ) {
        indexAtual = x;
      }
    }

    const temp = arrayInterno[i];
    arrayInterno[i] = arrayInterno[indexAtual];
    arrayInterno[indexAtual] = temp;
  }

  return arrayInterno;
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

console.log('---------------');
tocarMusica('Musica2');
tocarMusica('Musica3');
tocarMusica('Musica3');
console.table(ordenarPorNome(playlist));
console.table(orderNarPorReproducoes(playlist));
