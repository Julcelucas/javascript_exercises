
function mostrarPreco(){

var inQuilo = document.getElementById('inQuilo')
var inGrama = document.getElementById('inGrama')
var outPreco = document.getElementById('outPreco')

var quilo = Number(inQuilo.value)
var grama = Number(inGrama.value)

var preco = (grama / 1000) * quilo


outPreco.innerHTML = `Valor a pagar RS: ${preco.toFixed(2)}`
}

var btPreco = document.getElementById('btPreco')
btPreco.addEventListener('click', mostrarPreco)