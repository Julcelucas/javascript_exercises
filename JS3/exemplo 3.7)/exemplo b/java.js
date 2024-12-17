function verificarVel(){

    var inPerm = document.getElementById('inPerm')
    var inCond = document.getElementById('inCond')
    var outSitu = document.getElementById('outSitu')
    
    outSitu.textContent = ''

    var perm = Number(inPerm.value)
    var cond = Number(inCond.value)

    if((perm == 0 || isNaN(perm)) || (cond == 0 || isNaN(cond))){
        alert('[ERRO] Preencha os Campos Correctamente!')
        inPerm.focus()
        inCond.focus()
        return
    }

    var vmulta = perm * (120 / 100)
    if( cond <= perm){
        outSitu.innerHTML = 'Situação: Sem Multa'
        
    }
    else if(cond <= vmulta ) {
        outSitu.innerHTML = 'Situação: Multa Leve'
    }

    else if(cond > vmulta){
        outSitu.innerHTML = 'Situação: Multa Pesada'
    }
}

var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarVel)



/* if((perm == 0 || isNaN(perm)) || (cond == 0 || isNaN(cond))){
    alert('[ERRO] Preencha os Campos Correctamente!')
    inPerm.focus()
    inCond.focus()
} */