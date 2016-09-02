var trs = document.getElementsByTagName("tr");
percorreArray(trs, function(tr) {
	tr.addEventListener("mouseover", function(){

		this.setAttribute("bgcolor", "gray");
	});
});