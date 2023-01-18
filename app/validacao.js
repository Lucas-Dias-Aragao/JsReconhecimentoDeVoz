//converte o valor do chute para um numero inteiro
function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute

  if(chuteForInvalido(numero)) {
    //bloco para encerrarr o jogo com game over
    if(chute.toUpperCase() === 'GAME OVER') {
      document.body.innerHTML = 
      ` 
      <h2>Game Over!!!</h2>
      <h3>Pressione o botão para jogar novamente</h3>
      <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
      `
      document.body.style.backgroundColor = "black";

    } else {
      elementoChute.innerHTML += '<div>Valor inválido</div>'
    }
    
  }


  if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
    elementoChute.innerHTML += `
    <div>
    Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}
    </div>
    `
    return
  }

  if(numero === numeroSecreto) {
    document.body.innerHTML = `
    <div>
      <h2>Você acertou!!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
    </div>

      <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>

      `
  } else if (numero > numeroSecreto){
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
    `
  }

}


function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
  return numero > maiorValor || numero < menorValor
}

//função que recarrega a página ao clicar no botão 'jogar novamente'
document.body.addEventListener('click', e => {
  if(e.target.id == 'jogar-novamente'){
    window.location.reload();
  }
})

