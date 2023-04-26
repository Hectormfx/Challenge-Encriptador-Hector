var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var munieco = document.querySelector(".contenedorMunieco");
var contenedorParrafo = document.querySelector(".contenedor_parrafo");
var textoResultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    textoResultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto();
    textoResultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".cajaTexto");
    return cajaTexto.value;
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

const botonCopiar = document.querySelector(".boton_copiar");
botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
})