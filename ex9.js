var i = 1;

adicionar = function() {
    produto = document.querySelector("#produto").value;
    valor = document.querySelector("#valor").value;

    document.querySelector("tbody").innerHTML += "<tr id='linha"+i+"'><td>"+produto+"</td><td>"+valor+"</td><td><a href='javascript:excluir("+i+")'>Excluir</a></tr>";

    document.querySelector("#produto").value = "";
    document.querySelector("#valor").value = "";

    document.querySelector("#produto").focus();
    i++;
}

excluir = function(i) {
    document.querySelector("#linha"+i).innerHTML = "";
}