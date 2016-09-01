// peso / altura * altura

var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");


var paciente1 = {
    "peso1": tdPeso.textContent,
    "altura1": tdAltura.textContent
};

var tdPeso2 = document.getElementById("peso-2");
var tdAltura2 = document.getElementById("altura-2");


var paciente2 = {
    "peso2": tdPeso.textContent,
    "altura2": tdAltura.textContent
};
var pacientesTotal = [paciente1, paciente2];

var posicaoAtual = 0;
while (posicaoAtual <= pacientesTotal.length - 1) {

    var pacientesTotal = pacientesTotal[posicaoAtual]

    if (paciente.altura != 0) {
        var imc = paciente.peso / (paciente.altura * paciente.altura);

        //var tdImc = document.getElementById("imc-2");
        //tdImc.textContent = imc;
        console.log(imc);
    } else {
        console.log("não executei");
    }
    posicaoAtual++;
}