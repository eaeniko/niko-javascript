// peso / altura * altura

function calculaImc(paciente) {
    if (paciente.altura != 0) {
        var imc = paciente.peso / (paciente.altura * paciente.altura);
        return imc;
    } else {
        console.log("não executei");
    }

}



var trsPacientes = document.getElementsByClassName("paciente");

var posicaoAtual = 0;

for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {

    var pacienteTr = trsPacientes[posicaoAtual];

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

    var pacienteAtual = {
        "nome": tdNome.textContent,
        "peso": tdPeso.textContent,
        "altura": tdAltura.textContent
    };

   var imc = calculaImc(pacienteAtual);

    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
    tdImc.textContent = imc;

    console.log(imc);

}