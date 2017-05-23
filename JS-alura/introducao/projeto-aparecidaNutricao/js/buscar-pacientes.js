var botaoAdicionar = document.querySelector("#atualizar-pacientes");

botaoAdicionar.addEventListener("click", function(){

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){
		var resposta = xhr.responseText;
		var pacientes = JSON.parse(resposta);

		pacientes.forEach( function(paciente){
			adicionaPacienteNaTabela(paciente);
		});
	});

	xhr.send();
});