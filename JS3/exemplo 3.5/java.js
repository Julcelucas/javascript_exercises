
function calcularRaiz(){
    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    var numero = Number(inNumero.value)

    if(numero == 0 || isNaN(numero)){
        alert('Insira um numero válido...')
        inNumero.focus()
    }

    var raiz = Math.sqrt(numero)

    if( raiz== Math.floor(raiz)){
        outResposta.textContent = `Raiz: ${raiz}`
    }

    else{
        outResposta.innerHTML = 'Não há raiz exata para '+numero
    }
}

var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularRaiz)