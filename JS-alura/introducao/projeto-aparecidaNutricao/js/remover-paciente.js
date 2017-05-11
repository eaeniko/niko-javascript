var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

	if(event.target.tagName == 'TD'){
		
		event.target.parentNode.classList.add("fadeOut");

		setTimeout(function(){
			event.target.parentNode.remove();

		}, 1000);
	}

});




// pacientes.forEach(function(paciente)){
// 	paciente.addEventListener("dblclick", function(){
// 		this.remove();
// 	});

// };