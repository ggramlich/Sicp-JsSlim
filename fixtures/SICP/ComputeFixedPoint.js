SICP.ComputeFixedPoint = SICP.createDecistionTableFixture(function (precision) {
	this.setFunction = function (theFunction) {
		this.theFunction = function (x) {
			return eval(theFunction + "(x)");
		};
	};
	
	with (SICP) {
		this.testFunction = function (x) {
			return fixedPoint(this.theFunction, x, precision);
		}
	}
});
