var carros = [];

carros[0] = {modelo: "Ka", preco: 28800};
carros[1] = {modelo: "Corsa", preco: 34750};
carros[2] = {modelo: "Palio", preco: 32000};

carros.reduce(function (prev, cur) {
	return prev + cur.preco;

}, 0);

// 95550


// O jeito mais "conhecido"

var carros = [];

carros[0] = {modelo: "Ka", preco: 28800};
carros[1] = {modelo: "Corsa", preco: 34750};
carros[2] = {modelo: "Palio", preco: 32000};

var total = 0;
carros.forEach(function (elemento) {
	total += elemento.preco;
});

// 95550