var resultado = document.getElementById("resultado");

function resetar(){
    resultado.innerHTML = "";
}
function apagar(){
    let valor = resultado.innerHTML;
    resultado.innerHTML = valor.substring(0, valor.length -1);
}
function inNumber(num) {
    let numero= resultado.innerHTML;
    resultado.innerHTML = numero+num;
}

function calcular(){
    let result =  resultado.innerHTML;
    if(resultado){
        resultado.innerHTML = eval(result);
    }
}
