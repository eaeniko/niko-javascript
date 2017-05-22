var botaoAdicionar = document.querySelector("#atualizar-pacientes");

botaoAdicionar.addEventListener("click", function(){

	var xhr = new new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){
		console.log(xhr.responseText);
	});

	xhr.send();
});