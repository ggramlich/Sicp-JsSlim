SICP.ComputeFixedPoint = SICP.createDecistionTableFixture(function (precision) {
	this.setPrecision(precision);
	
	// Default guess
	this.x = 1;
	
	this.setGuess = function (guess) {
		this.setX(guess);
	};
	
	with (SICP) {
		// allow user defined functions to use the functions defined in SICP namespace
		this.setFunction = function (theFunction) {
			this.theFunction = eval("(" + theFunction + ")");
		};
	
		this.restrictArgumentTo = function (position, value) {
			this.theFunction = restrict(this.theFunction, position, value);
		};

		this.testFunction = function (guess) {
			return fixedPoint(this.theFunction, guess, this.precision);
		}
	}
});
