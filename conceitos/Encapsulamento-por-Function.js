var counter = function() {
	var value = 0
	var add = function() {
		return ++value;
	};
};

console.log(counter.value); // undefined
console.log(counter.add()); // undefined




var createCounter = function() {
	var value = 0;
	return {
		add: function(){
			return ++value;
		}
	};
};
console.log(counter.value); // undf
console.log(counter.add()); //1


// Usando Construtora

var Counter = function() {
	var value = 0;
	this.add = function() {
		return ++value;	
	};	
};

var counter = new Counter();
counter.value; //undefined
counter.add() //1
counter.add() //2
counter.add() //3