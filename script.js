function Ofuscar(){
    var entrada = document.getElementById("entrada");
    var saida = document.getElementById("saida")

    var texto = entrada.value;

    texto = texto.replace(/e/gi,"enter");
    texto = texto.replace(/i/gi,"inis");
    texto = texto.replace(/o/gi,"omber");
    texto = texto.replace(/u/gi,"ufter");
    texto = texto.replace(/a/gi,"ais");
    
    saida.value = texto;
}

function Desofuscar(){
    var entrada = document.getElementById("saida");
    var saida = document.getElementById("entrada")

    var texto = entrada.value;

    texto = texto.replace(/enter/gi,"e");
    texto = texto.replace(/inis/gi,"i");
    texto = texto.replace(/omber/gi,"o");
    texto = texto.replace(/ufter/gi,"u");
    texto = texto.replace(/ais/gi,"a");
    
    saida.value = texto;
}