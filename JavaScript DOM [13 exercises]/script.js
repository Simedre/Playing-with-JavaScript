//1.
function A(){
    var x = document.getElementById("text");
    x.style.fontSize = "14pt";
    x.style.fontFamily = "Comic Sans MS";
    x.style.color = "green";
}

//2.
function getFormvalue(){
    var x = document.getElementById("fname").value;
    var y = document.getElementById("lname").value;
    document.getElementById("result").innerHTML = "The full name is: " + x + " " + y + ".";
}

//3.
function set_background(){
    var x = document.getElementById("text2");
    x.style.backgroundColor = "green";
}

//4.
function getAttributes(){
    var a = document.getElementById("w3r").type;
    var b = document.getElementById("w3r").hreflang;
    var c = document.getElementById("w3r").rel;
    var d = document.getElementById("w3r").target;
    var e = document.getElementById("w3r").href;
    document.getElementById("result2").innerHTML = "The values of each attribute are as follows:</br><b>type:</b> " + a + ";</br<b>>hreflang:</b> " + b + ";</br><b>rel:</b> " + c + ";</br><b>target:</b> " + d + ";</br><b>href:</b> " + e + ".";                                                    
}

//5.
function insert_Row(){
    var tableBody = document.getElementById("sampleTable");
    var rows = tableBody.rows;
    //console.log(rows);
    var nrRow = rows.length;
    var newRow = tableBody.insertRow(nrRow);
    var x = newRow.insertCell(0);
    var y = newRow.insertCell(1);
    x.innerHTML = `Row${nrRow+1} Cell1`;
    y.innerHTML = `Row${nrRow+1} Cell2`;
}

//6.
function changeContent(){
    var tableBody = document.getElementById("myTable");
    var rows = tableBody.rows;
    var totalRows = rows.length;
    var nrRow = []; 
    for (var i = 0; i <= totalRows-1; i++){
        nrRow.push(i);
        //console.log(nrRow);
    }
    var rn = window.prompt(`Input the Row number ${nrRow}`, "0");
    var cell = rows[Number(rn)].cells;
    var totalCells = cell.length;
    var nrCell = [];
    for ( var x = 0; x <= totalCells-1; x++){
        nrCell.push(x);
        //console.log(rows[x].cells);
    }
    var cn = window.prompt(`Input the Column number ${nrCell}`,"0");
    var content = window.prompt("Input the Cell content");
    //console.log(totalCells);
    var y=document.getElementById('myTable').rows[parseInt(rn,10)].cells;
    y[parseInt(cn,10)].innerHTML=content;
}

//7.
function createTable(){
    var rn = window.prompt("Input number of rows", 1);
    var cn = window.prompt("Input number of columns",1);
    for( var r = 0; r < parseInt(rn,10); r++){
        var x = document.getElementById('myTable2').insertRow(r);
        //console.log(x);
        for( var c = 0; c < parseInt(cn,10); c++){
            var y =  x.insertCell(c);
            //console.log(y);
            y.innerHTML="Row-"+r+" Column-"+c; 
        }
    }
}

//8.
function removecolor(){
    var x=document.getElementById("colorSelect");
    console.log(x); 
    x.remove(x.selectedIndex);
}

//9.
function getOptions(){
    var x=document.getElementById("mySelect");
    var txt1 = "No. of items : ";
    var i;
    var l=document.getElementById("mySelect").length;  
    var txt1 = txt1+l;
    for (i=0;i<x.length;i++){
        txt1 = txt1 + "\n" + x.options[i].text;
    }
    alert(txt1);
}

//10.
function volume_sphere(){
    var volume;
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    return false;
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

//11.
function display_random_image(){
    var theImages = [{
        src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: "240",
        height: "160"
    }, 
    {
        src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: "320",
        height: "195"
    },
    {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];
    
    var preBuffer = [];
    //console.log(preBuffer);
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    } 
    // create random image number
    function getRandomInt(min,max){
        //  return Math.floor(Math.random() * (max - min + 1)) + min;
        var imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }  
    // 0 is first image,   preBuffer.length - 1) is  last image
    var newImage = getRandomInt(0, preBuffer.length - 1);
    // remove the previous images
    var images = document.getElementsByTagName('img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    document.getElementById("exImg").appendChild(newImage);
}

//12.
//First create a list of all bold items 
var bold_Items;
window.onload = getBold_items();
// Collect all <strong> tags
function getBold_items(){
    bold_Items = document.getElementsByTagName('strong'); 
}
// iterate all bold tags and change color  
function highlight(){
   for (var i=0; i<bold_Items.length; i++){                                                    
        bold_Items[i].style.color = "green";
        bold_Items[i].style.textShadow = "5px 5px 1px grey";
    }
}
// On mouse out highlighted words become black
function return_normal(){
    for (var i=0; i<bold_Items.length; i++){
       bold_Items[i].style.color = "black";
       bold_Items[i].style.textShadow = "";
    }
}

//13.
function getSize(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;     
    // put the result into a h1 tag
    document.getElementById('wh').innerHTML = "<h1>Width: " + w + " & Height: " + h + "</h1>";
}