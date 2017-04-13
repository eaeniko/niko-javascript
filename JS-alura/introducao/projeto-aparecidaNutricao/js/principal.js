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

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValida = true; 

	if(peso <= 0 || peso >= 1000) {
		console.log("Peso Inválido");
		pesoValido = false;
		tdImc.textContent = "Peso inválido";
		paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 3.00) {
		console.log("Altura inválida!");
		alturaValida = false;
		tdImc.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido")
	}

	if(alturaValida && pesoValido) {
		var imc = peso / (altura * altura);
		tdImc.textContent = imc.toFixed(2);
	}
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function() {
	console.log("Botão clicado");
});


// ^ função anonima 
//function mostraMensagem() {	~função normal~
//	console.log("Olá eu fui clicado!");
