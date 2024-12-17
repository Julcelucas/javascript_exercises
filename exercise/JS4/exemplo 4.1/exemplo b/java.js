function exibirNumero(){

    var inNumero = document.getElementById('inNumero')
    var outResposta = document.getElementById('outResposta')

    outResposta.textContent = ''

    //Obter o valor da variavel
    var numero = Number(inNumero.value)

    //Condicões em que o programa nao funciona

    if(numero == 0 || isNaN(numero)){
        alert('[ERRO]__Insira Um Número Válido')
        inNumero.focus()
        return
    }

    else if( numero % 2 == 0){
        outResposta.textContent = `Resposta: ${numero} é Par`
    }

    else{
        outResposta.textContent = `Resposta: ${numero} é Ímpar`
    }


}

var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', exibirNumero)