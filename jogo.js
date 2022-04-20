var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura,altura)
}
ajustaTamanhoPalcoJogo();

function posicaoRandomica(){

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor( Math.random() * altura) - 90

console.log(posicaoX,posicaoY)

// criar elemento html
var mosquito = document.createElement('img')

mosquito.src = 'imagens/mosquito.png'
mosquito.className = 'mosquito1'
// aplicação das coordenadas
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
// para que as coordenadas sejam aplicadas a posição deve ser absoluta
mosquito.style.position = 'absolute'

document.body.appendChild('mosquito')
}