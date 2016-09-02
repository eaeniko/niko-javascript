// peso / altura * altura

var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs;

botao.addEventListener("click", function calculaTodosImcs() {
    var trsPacientes = document.getElementsByClassName("paciente");

    var posicaoAtual = 0;
    percorreArray(trsPacientes, imprimeEModificaTdDeImc);

    percorreArray(trsPacientes, function(pacienteTr) {

        var pacienteTr = trsPacientes[posicaoAtual];

        var imc = pacienteAtual.pegaImc();

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        var pacienteAtual = montaPaciente(pacienteTr);
        tdImc.textContent = imc;

        console.log(imc);
    });

    function montaPaciente(pacienteTr) {
        var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
        var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
        var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];

        var pacienteAtual = {
            "nome": tdNome.textContent,
            "peso": tdPeso.textContent,
            "altura": tdAltura.textContent,
            "pegaImc": function() {
                if (this.altura != 0) {
                    var imc = this.peso / (this.altura * this.altura);
                    return imc;
                } else {
                    console.log("não executei");
                }
            }
        }
        return pacienteAtual;
    }

    function imprimeEModificaTdDeImc(pacienteTr) {

        var pacienteAtual = montaPaciente(pacienteTr);
        var imc = pacienteAtual.pegaImc();

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
        tdImc.textContent = imc;

        console.log(imc);
    }
});