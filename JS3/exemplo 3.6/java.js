function exibirNotas (){

    var inSaque = document.getElementById('inSaque')
    var outNotasCem = document.getElementById('outNotasCem')
    var outNotasCinquenta = document.getElementById('outNotasCinquenta')
    var outNotasDez = document.getElementById('outNotasDez')


    outNotasCem.textContent = ''
    outNotasCinquenta.textContent = ''
    outNotasDez.textContent = ''

    var saque = Number(inSaque.value)

    // Não vai funcionar quando...

    if(saque == 0 || isNaN(saque)){
        alert('Informe o valor do saque correctamente')
        inSaque.focus()
        return
    }

    if(saque % 10 != 0){
        alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)')
    }

    // Fazer os devidos calculos
    //Obter Notas de Cem
     var NotasCem = Math.floor(saque / 100)

     // Obter Notas de Cinquenta
     var resto = saque % 100
     var NotasCinquenta = Math.floor(resto / 50)

     //Obter Notas de Dez
     resto = resto % 50
     var NotasDez = Math.floor(resto / 10)


     //Mostrar as notas disponíveis na tela

     if(NotasCem > 0){
        outNotasCem.textContent = 'Notas de 100: ' +NotasCem
     }

     if(NotasCinquenta > 0){
        outNotasCinquenta.textContent = 'Notas de 50: ' +NotasCinquenta
     }

     if(NotasDez > 0){
        outNotasDez.textContent = 'Notas de 10: ' +NotasDez
     }

}

var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', exibirNotas)

// e 
