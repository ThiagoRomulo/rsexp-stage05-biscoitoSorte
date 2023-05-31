// Criação de variáveis
const messages = [
  "Procure acender uma vela em vez de amaldiçoar a escuridão",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida sempre será finita, porém qual a diferença de sorrirmos ou chorarmos hoje. Sorria!",
]
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnCookie = document.querySelector("#closedCookie")
const btnOther = document.querySelector("button")
const textMsg = screen2.querySelector("p")
let index = 0;

// Eventos
btnCookie.addEventListener('click', newMsg)
btnOther.addEventListener('click', nextMsg)
document.addEventListener('keydown', keyEnter)

// Funções
function newMsg() {
  textMsg.innerText = `${messages[index]}`
  toggleScreen()
}

function nextMsg() {
  if (index < 2){
    index++
  } else {
    index = 0
  }
  
  toggleScreen()
}

function keyEnter (e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
      newMsg()
  } else if(e.key == 'Enter' && screen2.classList.contains('hide')){
      nextMsg()
    }
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}