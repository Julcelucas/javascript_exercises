function calcularPeso(){
    var inNome = document.getElementById('inNome')
    var rbMasculino = document.getElementById('rbMasculino')
    var rbFeminino = document.getElementById('rbFeminino')
    var inAltura = document.getElementById('inAltura')
    var outResposta = document.getElementById('outResposta')

    //Obter os valores das variaveis ou dos campos da pagina
    var nome = inNome.value
    var masculino = rbMasculino.checked
    var feminino = rbFeminino.checked
    var altura = Number(inAltura.value)

    //Verificar se o nome foi preenchido e sexo selecionado

    if(nome == '' || (masculino == false && feminino == false)){
        alert('Por favor, digite o nome e selecione o sexo...')
        inNome.focus()
        return
    }

    //Verifica se a altura vazio(0) ou Nan: Not-a-number

    if(altura == 0 || isNaN(altura)){
        alert('Por favor, informe a altura corretamente...')
        inAltura.focus()
        return
    }

    //Se Masculino
    if(masculino){
        var peso = 22 * Math.pow(altura, 2)
    } else {
        var peso = 21 * Math.pow(altura, 2)
    }

    //Apresentar a Resposta
    outResposta.textContent = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`

}

var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPeso)


function limparCampos(){

    document.getElementById('inNome').value = ''
    document.getElementById('rbMasculino').checked = false
    document.getElementById('rbFeminino').checked = false
    document.getElementById('inAltura').value = ''
    document.getElementById('outResposta').textContent = ''

    document.getElementById('inNome').focus()
}

var btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparCampos)

/* function limparCampos(){

    //recarrega a pagina
    location.reload()

    //posiciona o foco no elemento
    document.getElementById('inNome').focus()
}

var btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparCampos)

*/
