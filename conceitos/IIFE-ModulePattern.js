var counter = (function () {
	var value = 0;
	return {
		add: function() {
			return ++value;
		}
	};
})();

