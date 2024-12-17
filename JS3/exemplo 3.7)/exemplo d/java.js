function verificarLado(){

    var inLadoA = document.getElementById('inLadoA')
    var inLadoB = document.getElementById('inLadoB')
    var inLadoC = document.getElementById('inLadoC')
    var outResposta = document.getElementById('outResposta')
    var outTipo = document.getElementById('outTipo')
    
    
    var ladoA = Number(inLadoA.value)
    var ladoB = Number(inLadoB.value)
    var ladoC = Number(inLadoC.value)

    outResposta.textContent = ''
    outTipo.textContent = ''

    if(ladoA <= 0 || ladoB <= 0 || ladoC <= 0)
    {
        alert('[ERRO] Preencha todos os campos!')
        inLadoA.focus()
        return
    }

     if((ladoA + ladoB) <= ladoC || (ladoA + ladoC) <= ladoB || (ladoB + ladoC) <= ladoA){
        outResposta.textContent = 'Não é um Triângulo'
        return
     }
    

    
    if(ladoA == ladoB && ladoB == ladoC){
            outResposta.textContent = 'Lados podem formar um triângulo'  
            outTipo.textContent = 'Tipo: Equilátero' 
        return
    }

    
    if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ){
        outResposta.textContent = 'Lados podem formar um triângulo'  
        outTipo.textContent = 'Tipo: Isósceles' 
    return
    }

    if(ladoA != ladoB != ladoC){
        outResposta.textContent = 'Lados podem formar um triângulo'  
        outTipo.textContent = 'Tipo: Escaleno' 
    return
}
    
}

var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarLado)

function limparCampos(){
    
    document.getElementById('inLadoA').value = ''
    document.getElementById('inLadoB').value = ''
    document.getElementById('inLadoC').value = ''
    document.getElementById('outResposta').textContent = ''
    document.getElementById('outTipo').textContent = ''

    document.getElementById('inLadoA').focus() = ''
}

var btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparCampos)
