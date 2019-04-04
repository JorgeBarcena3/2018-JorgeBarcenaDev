'use strict';


var g_abierto = false;
var idiom = "Ingles";

function abrir(x) {


    //alert("FUNCIONANDO");

    if (!g_abierto) {
        x.style.width = "100%";
    } else {
        x.style.width = "0%";
    }

    g_abierto = !g_abierto;
}

function cerrar(x) {


    if(g_abierto && screen.width <= 768)
        x.style.width = "0%";

    g_abierto = !g_abierto;
}

function cambiarPagina(x){


    var paginas = document.getElementsByClassName("Paginas");

    var i;


    for(i = 0; i < paginas.length; i = i +1){

        // paginas[i].style.display = "hidden";
        paginas[i].style.display = "none";

    }

    // x.style.visibility = "visible";
    x.style.display = "inline-block";
    
    var x = document.getElementById("EnlacesIconos");
    if(g_abierto && screen.width <= 768)
        x.style.width = "0%";
    g_abierto = !g_abierto;

}

function cambiarIdioma(x){
    
    
    if(idiom === "Ingles"){
        
        idiom = "Espanol";
        
        
        
    }
    
    
    
    
    
    
    
    
}

//----------------------------
function checkCampos(){

    var campoEmail = document.getElementById("Email").value; // OBTENEMOS EL VALOR INTRODUCIDO

    var caracteresValidos =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Expresion que rige un patron de caracteres (Validado por W3S)
    if(!caracteresValidos.test(campoEmail))// Se comrpueba el el valor introducido con el patron de "caracteresValidos"
        alert("El valor del email introducido es incorrecto. Por favor compruebalo :)"); // Mensaje de ayuda para el usuario

    campoEmail = document.getElementById("Name").value; // OBTENEMOS EL VALOR INTRODUCIDO
    if(campoEmail.lenght <= 0)// Se comrpueba el el valor introducido con el patron de "caracteresValidos"
        alert("El valor del Name introducido es incorrecto. Por favor compruebalo :)"); // Mensaje de ayuda para el usuario

    campoEmail = document.getElementById("Asunto").value; // OBTENEMOS EL VALOR INTRODUCIDO
    if(campoEmail.lenght <= 0)// Se comrpueba el el valor introducido con el patron de "caracteresValidos"
        alert("El valor del Asunto introducido es incorrecto. Por favor compruebalo :)"); // Mensaje de ayuda para el usuario

    campoEmail = document.getElementById("Mensaje").value; // OBTENEMOS EL VALOR INTRODUCIDO
    if(campoEmail.lenght <= 0)// Se comrpueba el el valor introducido con el patron de "caracteresValidos"
        alert("El valor del Mensaje introducido es incorrecto. Por favor compruebalo :)"); // Mensaje de ayuda para el usuario

}





