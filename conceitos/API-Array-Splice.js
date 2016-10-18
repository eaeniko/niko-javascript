var carros = ["Ka", "Corsa", "Palio"];


carros.indexOf("Corsa"); // 1

carros.splice(1,1) // ["Corsa"]

carros.toString(); // ["Ka", "Palio"]

// remove o elemento passando a posição e a quantidade respectivamente.


carros.splice(1,1, "Sonic") // ["Corsa"]

carros.toString(); // ["Ka", "Sonic", "Palio"]
// substitui os elementos em uma posição com splice

carros.splice(1,0, "Sonic") // []

carros.toString(); // ["Ka", "Sonic", "Corsa, "Palio"]
// Adiciona os elementos em uma posição com splice