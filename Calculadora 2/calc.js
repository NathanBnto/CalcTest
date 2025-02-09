
function somar(){
    var restext = document.getElementById("result");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    restext.value = (num1 + num2);
}

function subtrair(){
    var restext = document.getElementById("result");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    restext.value = (num1 - num2);
}

function multiplicar(){
    var restext = document.getElementById("result");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    restext.value = (num1 * num2);
}

function dividir(){
    var restext = document.getElementById("result");
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    restext.value = (num1 / num2);
}