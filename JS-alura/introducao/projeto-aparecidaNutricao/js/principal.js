var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente);
console.log(peso);
console.log(altura);

var tdImc = paciente.querySelector(".info-imc");


if(peso < 0 || peso > 1000) {
	console.log("Peso Inválido");
}

var imc = peso / (altura * altura);
console.log(imc);

tdImc.textContent = imc;