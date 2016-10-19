var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[1] = {marca: "Chevrolet", modelo: "Corsa"};
carros[2] = {marca: "Fiat", modelo: "Palio"};

carros.map(function (elemento) {
	return elemento.marca === "Ford";
})

//["Ford", "Chevrolet", "Fiat"]