function Encriptar(){

    var fraseEntrada = document.getElementById("TextoCifrado").value.toLowerCase();


    var TextoCifrado = fraseEntrada.replace(/e/img, "enter");
    var TextoCifrado = TextoCifrado.replace(/o/img, "ober");
    var TextoCifrado = TextoCifrado.replace(/i/img, "imes");
    var TextoCifrado = TextoCifrado.replace(/a/img, "ai");
    var TextoCifrado = TextoCifrado.replace(/u/img, "ufat");

    document.getElementById("TextoDesencriptado").innerHTML = TextoCifrado;
    document.getElementById("BotonCopiar").style.display = "show";
    document.getElementById("BotonCopiar").style.display = "inherit";

}

function DesEncriptar(){

    var fraseEntrada = document.getElementById("TextoCifrado").value.toLowerCase();


    var TextoCifrado = fraseEntrada.replace(/enter/img, "e");
    var TextoCifrado = TextoCifrado.replace(/ober/img, "o");
    var TextoCifrado = TextoCifrado.replace(/imes/img, "i");
    var TextoCifrado = TextoCifrado.replace(/ai/img, "a");
    var TextoCifrado = TextoCifrado.replace(/ufat/img, "u");

    document.getElementById("TextoDesencriptado").innerHTML = TextoCifrado;

}

function Copiar() {

    var Contenido = document.querySelector("#TextoDesencriptado");
    Contenido.select();
    document.execCommand("copy");

}