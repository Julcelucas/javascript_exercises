
function verPromocao(){

var inVeiculo = document.getElementById('inVeiculo')
var inPreco = document.getElementById('inPreco')
var outVeiculo = document.getElementById('outVeiculo')
var outEntrada = document.getElementById('outEntrada')
var outParcela = document.getElementById('outParcela')

var veiculo = inVeiculo.value
var preco = Number(inPreco.value)

var entrada = preco * 0.50
var parcela = entrada / 12

outVeiculo.innerHTML = `Promoção: ${veiculo}`
outEntrada.innerHTML = `Entrada de RS: ${entrada.toFixed(2)}`
outParcela.innerHTML = `+12x de RS: ${parcela.toFixed(2)}`
}

var btVerPromocao = document.getElementById('btVerPromocao')
btVerPromocao.addEventListener('click', verPromocao)