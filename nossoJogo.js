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

