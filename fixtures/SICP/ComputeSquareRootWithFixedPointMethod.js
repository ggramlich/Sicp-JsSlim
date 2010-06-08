SICP.ComputeSquareRootWithFixedPointMethod = SICP.createDecistionTableFixture(function (precision) {
	this.setPrecision(precision);
	with (SICP) {
		this.testFunction = function (x) {
			return fixedPoint(function (guess) {
				return average(guess, x / guess);
			}, 1, this.precision);
		}
	}
});
