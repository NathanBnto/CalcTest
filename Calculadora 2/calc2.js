var soma = false;
var sub = false;
var multi = false;
var divi = false;
var showsres = false;
var num1 = 0, num2 = 0;

function addnum(x){
 document.getElementById("result").value += x;
}

function falsifica(){
    soma = false;
    sub = false;
    multi = false;
    divi = false;
    showsres= false;
}

function clean(){
    falsifica();
    num1 = 0;
    num2 = 0;
    document.getElementById("result").value = "";
}

function plus(){
    falsifica();
    soma = true;
    num1 = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = "";
}

function minus(){
    falsifica();
    sub = true;
    num1 = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = "";
}

function mult(){
    falsifica();
    multi = true;
    num1 = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = "";
}

function div(){
    falsifica();
    divi = true;
    num1 = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = "";
}
function operate(){
    if(!showsres){
        if(soma){
            num2 = parseFloat(document.getElementById("result").value);
            if(!isNaN(num1+num2)){
                document.getElementById("result").value = (num1 + num2);
            } else {
                document.getElementById("result").value = "Error";
            }
            showsres = true;
        }
        if(sub){
            num2 = parseFloat(document.getElementById("result").value);
            if(!isNaN(num1-num2)){
                document.getElementById("result").value = (num1 - num2);
            } else {
                document.getElementById("result").value = "Error";
            }
            showsres = true;
        }
        if(multi){
            num2 = parseFloat(document.getElementById("result").value);
            if(!isNaN(num1*num2)){
                document.getElementById("result").value = (num1 * num2);
            } else {
                document.getElementById("result").value = "Error";
            }
            showsres = true;
        }
        if(divi){
            num2 = parseFloat(document.getElementById("result").value);
            if(!isNaN(num1/num2)){
                document.getElementById("result").value = (num1 / num2);
            } else {
                document.getElementById("result").value = "Error";
            }
            showsres = true;
        }
    }
}