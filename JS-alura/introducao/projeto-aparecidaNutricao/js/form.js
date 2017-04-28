var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();
	
	var form = document.querySelector("#form-add");
	var paciente = obtemPacienteDoFormulario(form);
	
	var pacienteTr = montaTr(paciente);

	var errosPaciente = validaPaciente(paciente);


	if(errosPaciente.length > 0){
		var mensagemErro = document.querySelector("#mensagem-erro");
		mensagemErro.textContent = errosPaciente;
		return;
	}

	// adiciona paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();

});

function obtemPacienteDoFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){

	var pacienteTr = document.createElement("tr");

	pacienteTr.classList.add("paciente");

	// \/ jeito não recomendado
	var nomeTd = document.createElement("td");
	nomeTd.classList.add("info-nome");
	nomeTd.textContent = paciente.nome;
	// --- 

	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr
}

function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
	var erros = [];

	if(!validaPeso(paciente.peso)) erros.push("Peso inválido");

	if(!validaPaciente(paciente.altura)) erros.push("Altura inválida");


}