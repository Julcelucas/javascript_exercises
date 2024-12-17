function verPromocao(){
    var inProduto = document.getElementById('inProduto')
    var inPreco = document.getElementById('inPreco')
    var outPromocao = document.getElementById('outPromocao')
    var outDesconto = document.getElementById('outDesconto')

    var produto = inProduto.value
    var preco = Number(inPreco.value)

    var desconto = preco * 0.50

    outPromocao.textContent = `${produto} - Promoção: Leve 3 por RS: 10.00`
    outDesconto.textContent = `O 3º produto custa apenas RS: ${desconto.toFixed(2)}`
}

var btVerPromocao = document.getElementById('btVerPromocao')
btVerPromocao.addEventListener('click', verPromocao)