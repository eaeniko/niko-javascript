var counter = {
	value: 0,
	add: function (){
		return ++this.value;
	}	
};

counter.add(); //1
counter.add(); //2
counter.add(); //3