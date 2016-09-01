// peso / altura * altura


var trsPacientes = document.getElementsByClassName("paciente");

var posicaoAtual = 0;
while (posicaoAtual <= trsPacientes.length - 1) {

    var pacienteTr = trsPacientes[posicaoAtual];

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

    var paciente = {
        "nome": tdNome.textContent,
        "peso": tdPeso.textContent,
        "altura": tdAltura.textContent
    };


    if (paciente.altura != 0) {
        var imc = paciente.peso / (paciente.altura * paciente.altura);

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;

        console.log(imc);
    } else {
        console.log("não executei");
    }
    posicaoAtual++;
}