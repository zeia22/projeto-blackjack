 



//confirmação //Boas vindas
const continuarJogando = confirm(`Seja bem vindo ao jogo BlackJack!  Deseja iniciar o jogo?`);
if(continuarJogando){


const jogadorCarta1 = comprarCarta();
const jogadorCarta2 = comprarCarta();
const computadorCarta1 = comprarCarta();
const computadorCarta2 = comprarCarta();

const cartasJogador = [jogadorCarta1, jogadorCarta2];
const cartasComputador = [computadorCarta1, computadorCarta2];


//Mostrando as cartas
const mostrandoCartas = () => {

  let comprarMaisCarta = confirm(`Suas cartas são ${jogadorCarta1.texto} ${jogadorCarta2.texto}. A carta revelada do computador é ${computadorCarta1.texto} XX.\n Deseja comprar mais uma carta?`);
  return comprarMaisCarta

}
const comprarMaisCarta = mostrandoCartas();

// Verificando se tem duas carata com valor 11
const duasCartasA = (jogador, computador) => {

  return (jogador[0].valor === 11 && jogador[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11)

}

while (comprarMaisCarta) {
  //Nova carta do Jogador
  let novaCartaJogador = comprarCarta();
  cartasJogador.push(novaCartaJogador);

  let textoCartasJogador = "";
  for (let cartassJ of cartasJogador) {
    textoCartasJogador += cartassJ.texto;
  }
  //Nova carta do Computador
  // vai comprar carta se for menor que ou igual a  17
  const somaCartasComputador1 = cartasComputador[0].valor + cartasComputador[1].valor; 
  if(somaCartasComputador1 <= 17){
  let novaCartaComputador = comprarCarta();
  cartasComputador.push(novaCartaComputador);
  }
  let textoCartasComputador = "";
  for (let cartassC of cartasComputador) {
    textoCartasComputador += cartassC.texto;
  }
  //Somando as cartas
let somaCartasJogador = 0;
let somaCartasComputador = 0;

for (let j of cartasJogador) {
  somaCartasJogador += j.valor;
}

for (let l of cartasComputador) {
  somaCartasComputador += l.valor;
}


 confirm(`Suas cartas são ${textoCartasJogador}. Sua pontuação é ${somaCartasJogador}.
 As carta revelada do computador é ${computadorCarta1.texto} XX.\n Deseja comprar mais uma carta?`);
  break;
}
//mostrando as cartas do array cartas jogador
let textoCartasJogador = "";
for (let cartassJ of cartasJogador) {
  textoCartasJogador += cartassJ.texto;
}
let textoCartasComputador = "";
for (let cartassC of cartasComputador) {
  textoCartasComputador += cartassC.texto;
}
//Somando as cartas
let somaCartasJogador = 0;
let somaCartasComputador = 0;

for (let j of cartasJogador) {
  somaCartasJogador += j.valor;
}

for (let l of cartasComputador) {
  somaCartasComputador += l.valor;
}


// Se os dois passarem de 21
const mensagem = `Suas cartas são ${textoCartasJogador}. Sua pontuação é ${somaCartasJogador}. 
As cartas do computador são ${textoCartasComputador}. A pontuação do computador é ${somaCartasComputador}.`;

if (somaCartasJogador > 21 && somaCartasComputador > 21) {
  alert(`${mensagem} 
   Nenhum jogador ganhou.`);
} else if (somaCartasJogador === somaCartasComputador) {
  alert(`${mensagem} 
   Empatou!`);
} else if (somaCartasJogador <= 21 && somaCartasComputador > 21) {
  alert(`${mensagem} 
   O usuário ganhou!`);
} else if (somaCartasJogador > somaCartasComputador && somaCartasJogador <= 21) {
  alert(`${mensagem} 
   O usuário ganhou!`);
} else if (somaCartasComputador <= 21 && somaCartasComputador > somaCartasJogador) {
  alert(`${mensagem} 
   O computador ganhou!`);
} else if (somaCartasJogador > 21 && somaCartasComputador < 21) {
  alert(`${mensagem} 
   O computador ganhou!`);
}

}else{
  alert();("O jogo acabou");
}