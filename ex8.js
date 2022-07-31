contar = function() {
    var valor = document.querySelector("#valor").value;
    var mensagem = document.querySelector("#mensagem");
    for (i = 0; i <= valor; i++) {
        if ( i == 10 ) break;
        mensagem.innerHTML += "<p>"+i+"</p>";
    }
}