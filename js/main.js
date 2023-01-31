function clickcount(){
    var string = document.getElementById("botonjs1").innerHTML;
    var num = string.replace(/\D/g,'');
    num++
    document.getElementById("botonjs1").innerHTML="Este boton le dirá cuantas veces lo ha presionado: "+num+" veces"
}

function randomcolor(){
    var color = Math.floor(Math.random() * 3);

    if (color===0){
        document.getElementById("botonjs2").style.background='lightblue'
    }
    
    if (color===1){
        document.getElementById("botonjs2").style.background='lightgreen'
    }

    if (color===2){
        document.getElementById("botonjs2").style.background='gray'
    }
}

function givedate(){
    const d = new Date()
document.getElementById("botonjs3").innerHTML = d
}