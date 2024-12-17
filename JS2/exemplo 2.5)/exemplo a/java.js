function mostarPromocao(){
    var inMed = document.getElementById('inMed')
    var inPreco = document.getElementById('inPreco')
    var outMed = document.getElementById('outMed')
    var outPromocao = document.getElementById('outPromocao')

    var med = inMed.value
    var preco = Number(inPreco.value)

    var prom = Math.floor(preco * 2)

    outMed.innerHTML = `Promoção de ${med}`
    outPromocao.innerHTML = `Leve 2 por apenas RS: ${prom.toFixed(2)}`
}

var btPromocao = document.getElementById('btPromocao')
btPromocao.addEventListener('click',  mostarPromocao)