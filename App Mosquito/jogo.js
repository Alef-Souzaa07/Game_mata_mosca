
var largura = 0
var altura = 0
var vidas = 1
var tempo = 10

var criaMosquito = 1500


//Capturando nivel selecionado pelo usuario
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosquito
} else if (nivel === 'dificil') {
    criaMosquito = 1000
} else if (nivel === 'aspas') {
    criaMosquito = 750
}
    



function ajustaTamanhoPagina(){
    largura = window.innerWidth;
    altura = window.innerHeight;
    console.log(largura, altura)
}
ajustaTamanhoPagina()


var cronometro = setInterval(function() {
    
    tempo -= 1
    document.querySelector('#cronometro').innerHTML = tempo
    
    if (tempo < 0) {
        window.location.href = "player-win.html"
    }
}, 1000);


function posicaoRandom() {

    //Remover o mosquito anterior caso exista
    var verificarMosquito = document.querySelector('#mosquito')
    if (verificarMosquito) {
        verificarMosquito.remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.querySelector("#v" + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 60
    var posicaoY = Math.floor(Math.random() * altura) - 60

    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY 

    console.log(posicaoX, posicaoY)

//Criar o elemento HTML
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // OBS: Foi adicionado o 'espaço' entre os estilos para que que não fiquem juntos
mosquito.style.left = posicaoX + "px"
mosquito.style.top = posicaoY + "px"
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
    this.remove()
}


document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {

    var classe = Math.floor(Math.random() * 3)
    

    switch (classe) {
        case 0:
            return 'mosquito1'
        
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}