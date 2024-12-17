function exibirFuso(){
    var inHoraBrasil = document.getElementById('inHoraBrasil')
    var outHoraFranca = document.getElementById('outHoraFranca')

    var horaBrasil = Number(inHoraBrasil.value)

    //Se nao preencheu a hora ou hora nao é um numero
   
    if(inHoraBrasil.value == '' || isNaN(horaBrasil)){
     alert('Por favor, informe a hora no Brasil') 
     inHoraBrasil.focus()
     return 
    }

    var horaFranca = horaBrasil + 5
 //Se passar das 24 horas na franca
    if(horaFranca > 24){
        horaFranca = horaFranca - 24
    }

    outHoraFranca.innerHTML = 'Hora da Franca: ' +horaFranca +' h'
    
}

var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', exibirFuso)