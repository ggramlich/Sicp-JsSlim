var SICP = (function() {
	var constructor = function () {};
	var self = {
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
	SICP.namespace = {};
	return SICP;
})();
