var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();
	
	var form = document.querySelector("#form-add");
	var paciente = obtemPacienteDoFormulario(form);
	
	var pacienteTr = montaTr(paciente);

	var errosPaciente = validaPaciente(paciente);

	console.log(errosPaciente);

	if(errosPaciente.length > 0){
		exibeMensagensDeErro(errosPaciente);
		return;
	}

	// adiciona paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

	form.reset();

});

function exibeMensagensDeErro(errosPaciente){
	var ul = document.querySelector("#mensagens-erro");
	errosPaciente.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}

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

	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco");
	}

	if(!validaPeso(paciente.peso)) erros.push("Peso inválido");

	if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

return erros;

}