function confirmarDep(){

    var inValor = document.getElementById('inValor')
    var outTempo = document.getElementById('outTempo')
    var outTroco = document.getElementById('outTroco')

    var valor = Number(inValor.value)

    outTempo.textContent = ''
    outTroco.textContent = ''

    if(valor <= 0 || valor < 1)
    {
        alert('[ERRO] Valor Insuficiente!')
        inValor.focus()
        return
    }

    if (valor <= 1.74){
        
        outTempo.textContent = `Tempo: 30 min`

        var troco = valor - 1.00

        outTroco.textContent = `Troco R$: ${troco}`

        return
    }

    if (valor <= 2.59){
        
        outTempo.textContent = `Tempo: 60 min`

        var troco = valor - 1.75

        outTroco.textContent = `Troco R$: ${troco}`

        return
    }

    else {
        
        outTempo.textContent = `Tempo: 120 min`

        var troco = valor - 3.00

        outTroco.textContent = `Troco R$: ${troco}`
    }
}

var btConfirmar = document.getElementById('btConfirmar')
btConfirmar.addEventListener('click', confirmarDep)