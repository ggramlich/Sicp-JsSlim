var SICP = (function() {
	var constructor = function () {};
	var self = {
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
			var depth = 0;
			function closeEnough (x, y) {
				return (self.abs(x - y) < tolerance);
			};
			function iter (oldVal, newVal) {
				if (depth++ > 100) return newVal;
				return (closeEnough(oldVal, newVal)) ? newVal : iter(newVal, f(newVal));
			};
			return iter(start, f(start));
		},

		restrict: function (func, position, value) {
			return function() {
				var args = [];
				for (var i=0; i < position - 1; i++) {
					args.push(arguments[i]);
				};
				args.push(value);
				for (var i = position - 1; i < arguments.length; i++) {
					args.push(arguments[i]);
				};
				return func.apply(this, args);
			};
		},
		
		createDecistionTableFixture: function (constructor) {
			constructor.prototype = {
				setX: function (x) {
					this.x = x;
				},
				
				result: function () {
					return this.testFunction(this.x);
				},
				
				setPrecision: function (precision) {
					if (precision <= 1e-16) {
						print("Precision too small\n");
						this.precision = 0.0001;
					} else {
						this.precision = precision;
					}
				}
			};
			return constructor;
		}
	};
	constructor.prototype = self;
	var SICP = new constructor();
	SICP.constructor = constructor;
	return SICP;
})();
