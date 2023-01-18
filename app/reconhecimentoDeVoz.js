const elementoChute = document.getElementById('chute')


//linha que permite o funcionamento do projeto e implementações futuras
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


//instanciando o objeto de reconhecimento de voz
//lang - define o idioma e start inicia o reconhecimento de voz
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//evento que exibe a mensagem
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificaSeOChutePossuiUmValorValido(chute)
}

//exibindo o chute na tela e usando interpolação de string
function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
      <div>Você disse</div>
      <span class="box">${chute}</span>
   `
}

recognition.addEventListener('end', () => recognition.start())
