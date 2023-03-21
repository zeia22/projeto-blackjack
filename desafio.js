//Boas vindas 

alert(`seja bem vindo ao jogo BlackJack`);

//confirmação

if(confirm(`Deseja continuar o jogo?`)){
   const jogador1 = comprarCarta();
   const jogador2 = comprarCarta();
   const computador1 = comprarCarta();
   const computador2 = comprarCarta();
//Somando os valores 
   const somaJogador = jogador1.valor + jogador2.valor; 
   const somaComputador = computador1.valor + computador2.valor; 
// mostrando as cartas
   console.log(`Usuário - cartas: ${jogador1.texto} ${jogador2.texto} - ${somaJogador}`)
   console.log(`computador - cartas: ${computador1.texto} ${computador2.texto} - ${somaComputador}`);
//Calculando quem ganhou ou se deu empate
   if(somaJogador > somaComputador){

      console.log(`O Usuário ganhou!`);

   }else if(somaJogador === somaComputador){
      console.log(`O jogo deu empate`);
  
   }else{
      console.log(`O computador ganhou!`);
   }
}else{
   console.log("O jogo acabou");
}



// messagem de boas vindas.O usuário deve ser questionado se deseja iniciar uma nova rodada

const continuarJogando = confirm(`Seja bem vindo ao jogo Blackjack!  \n    Deseja iniciar o jogo?`);




const jogadorCarta1 = comprarCarta();
const jogadorCarta2 = comprarCarta();
const computadorCarta1 = comprarCarta();
const computadorCarta2 = comprarCarta();

const verificarSoma11 = (cartas) => {
  let soma = 0;
  for (let carta of cartas) {
    soma += carta.valor;
  }
  return soma === 11;
}

let comprandoCartas = (jogadorCarta1, jogadorCarta2, computadorCarta1, computadorCarta2) => {
  let todosJogadores = []
  if (continuarJogando) {
    todosJogadores = [jogadorCarta1, jogadorCarta2, computadorCarta1, computadorCarta2];

  }

  return todosJogadores
}

const cartasJogador = [jogadorCarta1, jogadorCarta2];
const cartasComputador = [computadorCarta1, computadorCarta2];
const todasCartas = comprandoCartas();

const mostrandoCartas = () => {

  let comprarMaisCarta = confirm(`Suas cartas são ${jogadorCarta1.texto} ${jogadorCarta2.texto}. A carta revelada do computador é ${computadorCarta1.texto} XX.\n Deseja comprar mais uma carta?`);
  return comprarMaisCarta

}
const comprarMaisCarta = mostrandoCartas();

const duasCartasA = (jogador, computador) => {

  return (jogador[0].valor === 11 && jogador[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11)

}

while (duasCartasA(cartasJogador, cartasComputador)) {
  mostrandoCartas();

  if (duasCartasA(cartasJogador, cartasComputador)) {
    break;
  }

}


const jogar = () => {
  let continuarJogando = true;

  while (continuarJogando) {
    let jogadorCarta1 = comprarCarta();
    let jogadorCarta2 = comprarCarta();
    let computadorCarta1 = comprarCarta();
    let computadorCarta2 = comprarCarta();

    // verifica se as cartas do jogador ou do computador somam 11
    while (verificarSoma11([jogadorCarta1, jogadorCarta2]) || verificarSoma11([computadorCarta1, computadorCarta2])) {
      jogadorCarta1 = comprarCarta();
      jogadorCarta2 = comprarCarta();
      computadorCarta1 = comprarCarta();
      computadorCarta2 = comprarCarta();
    }

    const mostrandoCartas = () => {
      const cartasJogador = [jogadorCarta1, jogadorCarta2];
      const cartasComputador = [computadorCarta1, computadorCarta2];

      const todasCartas = comprandoCartas();

      let comprarMaisCarta = confirm(`Suas cartas são ${jogadorCarta1.texto} ${jogadorCarta2.texto}. A carta revelada do computador é ${computadorCarta1.texto} XX.\n Deseja comprar mais uma carta?`);

      if ((jogadorCarta1[0].valor === 11 && jogadorCarta2[1].valor === 11) || (computadorCarta1[0].valor === 11 && computadorCarta2[1].valor === 11)) {
        // ...
      }
    }
    break;
  }
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
  let novaCartaComputador = comprarCarta();
  cartasComputador.push(novaCartaComputador);

  let textoCartasComputador = "";
  for (let cartassC of cartasComputador) {
    textoCartasComputador += cartassC.texto;
  }

  let comprarMaisCarta = confirm(`Suas cartas são ${textoCartasJogador}. A carta revelada do computador é ${computadorCarta1.texto} XX.\n Deseja comprar mais uma carta?`);
  break;
}
let textoCartasJogador = "";
for (let cartassJ of cartasJogador) {
  textoCartasJogador += cartassJ.texto;
}
let textoCartasComputador = "";
for (let cartassC of cartasComputador) {
  textoCartasComputador += cartassC.texto;
}
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
  console.log(`${mensagem} 
   Nenhum jogador ganhou.`);
} else if (somaCartasJogador === somaCartasComputador) {
  console.log(`${mensagem} 
   Empatou!`);
} else if (somaCartasJogador <= 21 && somaCartasComputador > 21) {
  console.log(`${mensagem} 
   O usuário ganhou!`);
} else if (somaCartasJogador > somaCartasComputador && somaCartasJogador <= 21) {
  console.log(`${mensagem} 
   O usuário ganhou!`);
} else if (somaCartasComputador <= 21 && somaCartasComputador > somaCartasJogador) {
  console.log(`${mensagem} 
   O computador ganhou!`);
} else if (somaCartasJogador > 21 && somaCartasComputador < 21) {
  console.log(`${mensagem} 
   O computador ganhou!`);
} else {
  console.log(`Fim do jogo!`);
}