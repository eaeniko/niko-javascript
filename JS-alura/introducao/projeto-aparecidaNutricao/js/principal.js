var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
	console.log(pacientes[i]);

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;


	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	console.log(paciente);
	console.log(peso);
	console.log(altura);

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValida = true; 

	if(peso <= 0 || peso >= 1000) {
		console.log("Peso Inválido");
		pesoValido = false;
		tdImc.textContent = "Peso inválido";
	}

	if(altura <= 0 || altura >= 3.00) {
		console.log("Altura inválida!");
		alturaValida = false;
		tdImc.textContent = "Altura inválida";
	}

	if(alturaValida && pesoValido) {
		var imc = peso / (altura * altura);
		console.log(imc);
		tdImc.textContent = imc.toFixed(2);
	}
}

