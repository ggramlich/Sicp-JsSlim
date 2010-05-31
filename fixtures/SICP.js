var SICP = {
	square: function (x) {
		return x*x;
	},
	
	abs: function (x) {
		if (x < 0) {
			return -x;
		} else {
			return x;
		}
	},
	
	average: function (x, y) {
		return (x+y)/2;
	},
	
	fixedPoint: function (f, start, tolerance) {
		with (SICP) {
			function closeEnough (x, y) {
				return (abs(x - y) < tolerance);
			};
		}
		function iter (oldVal, newVal) {
			return (closeEnough(oldVal, newVal)) ? newVal : iter(newVal, f(newVal));
		};
		return iter(start, f(start));
	},
	
	createDecistionTableFixture: function (constructor) {
		constructor.prototype = {
			setX: function (x) {
				this.x = x;
			},
			
			result: function () {
				return this.testFunction(this.x);
			}
		};
		return constructor;
	}
};
