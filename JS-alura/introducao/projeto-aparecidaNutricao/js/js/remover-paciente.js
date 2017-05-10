var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode; // tr = paciente

	paiDoAlvo.remove(); // event.target.parentNode.remove();

});




// pacientes.forEach(function(paciente)){
// 	paciente.addEventListener("dblclick", function(){
// 		this.remove();
// 	});

// };