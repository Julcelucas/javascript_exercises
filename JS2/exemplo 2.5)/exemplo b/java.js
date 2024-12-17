function calcular(){
    var inValor = document.getElementById('inValor')
    var inTempo = document.getElementById('inTempo')
    var outValor = document.getElementById('outValor')

    var valor = Number(inValor.value)
    var tempo = Number(inTempo.value)

    var pagar = Math.ceil(tempo / 15) * valor

    outValor.textContent = `Valor a pagar: ${pagar.toFixed(2)}`
}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcular)