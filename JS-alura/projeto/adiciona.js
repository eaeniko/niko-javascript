var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event) {

	event.preventDefault(); // impede comportamento padrão

    var pacienteNovo =
        "<tr class='paciente'>" +
        "<td class='info-nome'>Rafael</td>" +
        "<td class='info-peso'>100'</td>" +
        "<td class='info-altura'>1.60</td>" +
        "<td class='info-imc'></td>" +
        "</tr>";

    // var tabela = document.getElementsByTagName("table")[0];

    var tabela = document.querySelector("table");
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;
});