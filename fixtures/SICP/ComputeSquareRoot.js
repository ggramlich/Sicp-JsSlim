SICP.ComputeSquareRoot = SICP.createDecistionTableFixture(function (_precision) {
	with (SICP) {
		this.testFunction = function (x) {
			var precision = square(_precision);
			var sqrtIter = function (guess, x) {
				return goodEnough(guess, x) ? guess : sqrtIter(improve(guess, x), x);
			};
			var goodEnough = function (guess, x) {
				return (abs(square(guess) - x) < precision);
			};
			var improve = function (guess, x) {
				return average(guess, x / guess);
			};
			return sqrtIter(1, x);
		}
	}
});
