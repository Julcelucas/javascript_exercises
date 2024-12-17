function mostrarOla(){
    var nome = document.getElementById('nome').value 
    //var inputname = nome.value
    document.getElementById('resposta').textContent = `Olá ${nome}`

}
/*
var mostrar = document.getElementById('mostrar')
mostrar.onclick = mostrarOla*/

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', mostrarOla)


        