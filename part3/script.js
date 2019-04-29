// ex 1.
function ver(){
    var x = document.getElementById("input1").value;
    var y = document.getElementById("input2").value;
    var inputX = document.getElementById("input1");
    var inputY = document.getElementById("input2");
    if (x == y){
        document.getElementById("rez1").innerHTML = "Cela doua valori " + x + " si " + y + " sunt egale.";
        inputX.style.backgroundColor = "green";
        inputY.style.backgroundColor = "green";
    } else {
        document.getElementById("rez1").innerHTML = "Cela doua valori " + x + " si " + y + " nu sunt egale.";
        inputX.style.backgroundColor = "red";
        inputY.style.backgroundColor = "red";
    }
}
// ex 2.
function def(){
    var x = document.getElementById("input3").value;
    var y = document.getElementById("input4").value;
    var inputX = document.getElementById("input3");
    var inputY = document.getElementById("input4");
    if (x > y){
        document.getElementById("rez2").innerHTML = x + " este mai mare decat " + y;
        inputX.style.backgroundColor = "green";
        inputY.style.backgroundColor = "transparent";
    } else if (x < y){
        document.getElementById("rez2").innerHTML = x+ " este mai mic decat " + y;
        inputX.style.backgroundColor = "transparent";
        inputY.style.backgroundColor = "green";
    } else {
        document.getElementById("rez2").innerHTML = "Cele doua valori sunt egale.";
        inputX.style.backgroundColor = "lightgreen";
        inputY.style.backgroundColor = "lightgreen";
    }
}
// ex 3.
function A(){
    var x = document.getElementById("input5").value;
    var y = document.getElementById("input6").value;
    var z = document.getElementById("input7").value;
    var inputX = document.getElementById("input5");
    var inputY = document.getElementById("input6");
    var inputZ = document.getElementById("input7");
    if (x > y){
        document.getElementById("rez3").innerHTML = x + " este mai mare decat " + y;
        inputZ.value = x;
        inputX.style.backgroundColor = "lightgreen";
        inputY.style.backgroundColor = "transparent";
        inputZ.style.backgroundColor = "lightgreen";
        document.getElementById("input7").disabled = true;
    } else if (x < y){
        document.getElementById("rez3").innerHTML = x + " este mai meic decat " + y;
        inputZ.value = y;
        inputX.style.backgroundColor = "transparent";
        inputY.style.backgroundColor = "lightgreen";
        inputZ.style.backgroundColor = "lightgreen";
        document.getElementById("input7").disabled = true;
    } else {
        document.getElementById("rez3").innerHTML = "Cele doua valori sunt egale.";
        inputZ.value = "Valorile sunt egale";
        inputX.style.backgroundColor = "transparent";
        inputY.style.backgroundColor = "transparent";
        inputZ.style.backgroundColor = "#FF5858";
        document.getElementById("input7").disabled = true;
    }
}
// ex 4.
function S(){
    var x = document.getElementById("input8").value;
    var y = document.getElementById("input9").value;
    var z = document.getElementById("input10").value;
    var inputX = document.getElementById("input8");
    var inputY = document.getElementById("input9");
    var inputZ = document.getElementById("input10");
    inputZ.value = Number(x) + Number(y);
    inputZ.style.backgroundColor = "lightgreen";
    document.getElementById("input10").disabled = true;
}
// ex 5.
function T(){
    var x = document.getElementById("input11");
    var y = document.getElementById("textL");
        //y = x.split('');
        //y = y.length;
        //document.getElementById("textL").innerHTML = "Numarul de caractere introdus este de: " + y;
        x.onkeyup = function() {
              y.innerHTML = "Numarul de caractere introdus este de: " + x.value.length;
        }
}
// ex 6.
function limit(){
    var X = document.getElementById("input12");
    var max_chars = 10;
    if(X.value.length > max_chars) {
        X.value = X.value.substr(0, max_chars);
        document.getElementById("rez4").innerHTML ="Limita de caractere este de " + max_chars;
    }
}
// ex 7.
$(document).ready(function(){
      $("#input13").keypress(function(e){
            var keyCode = e.which;
            /*
            8 - (backspace)
            32 - (space)
            48-57 - (0-9)Numbers
            */
        if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) { 
              e.preventDefault();
              document.getElementById("rez5").innerHTML ="Singurele caractere acceptate sunt cifre.";
        }
      });
      $("#input13").keypress(function(e){
        var keyCode = e.which;
        /* 
        48-57 - (0-9)Numbers
        65-90 - (A-Z)
        97-122 - (a-z)
        8 - (backspace)
        32 - (space)
        */
        // Not allow special 
        if ( !( (keyCode >= 48 && keyCode <= 57) 
              ||(keyCode >= 65 && keyCode <= 90) 
              || (keyCode >= 97 && keyCode <= 122) ) 
              && keyCode != 8 && keyCode != 32) {
                  e.preventDefault();
        }
      });
});