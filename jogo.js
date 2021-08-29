let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 30;
let criaMosquitoTempo = 1200;
const nivel = window.location.search.replace('?', '');
const myClass= {
  1: 'mosquito1',
  2: 'mosquito2',
  3: 'mosquito3',
};
const myLado = {
  1: 'ladoA',
  2: 'ladoB',
}

function tamanhoAleatorio() {
  const classe = Math.ceil(Math.random() * 3);
  return [myClass[classe]];
}

function ladoAleatorio() {
  const lado = Math.ceil(Math.random() * 2);
  return myLado[lado];
}

if(nivel === 'normal') {
  criaMosquitoTempo = 1200;
} else if(nivel === 'dificil') {
  criaMosquitoTempo = 750;
} else if(nivel === 'visaoAvancada') {
  criaMosquitoTempo = 500;
}

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

const cronometro = setInterval(function() {
  tempo -= 1;
  if(tempo < 0) {
    clearInterval(criaMosquito);
    clearInterval(cronometro);
    window.location.href = 'vitoria.html';
  } else {
    document.getElementById('cronometro').innerHTML = tempo;
  }
}, 1000 );

function posicaoRandomica() {
  if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove();
    if(vidas > 5) {
      window.location.href = 'fim_de_jogo.html';
    } else {
      document.getElementById('v' + vidas).src = "img/coracao_vazio.png";
      vidas += 1;
    }
  }

  let posicaoX = Math.floor(Math.random() * largura) - 120;
  let posicaoY = Math.floor(Math.random() * altura) - 120;
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  const mosquito = document.createElement('img');
  mosquito.src = 'img/mosca_visao_avancada.gif';
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';
  mosquito.onclick = function() {
      this.remove();
  }

  document.body.appendChild(mosquito);
}
