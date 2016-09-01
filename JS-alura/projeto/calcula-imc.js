// peso / altura * altura

var peso = 100;
var altura = 2.0;
var diferenteDeZero = (altura != 0);

if(diferenteDeZero) {
	var imc = peso / (altura * altura);
	console.log(imc);
} else {
	
}