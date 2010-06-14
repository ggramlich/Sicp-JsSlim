SICP.FunctionStore = (function () {
	// The SICP.FunctionStore is a constructor function
	// that extends the SICP.constructor.
	// JsSlim instantiates an object by calling this constructor.
	var self = function () {
		with (SICP.namespace) {
			this.evaluate = function (expression) {
				return eval("(" + expression + ")");
			}
		}
		this.defineAs = function (name, expression) {
			this.log(name + " = " + expression);
			SICP.namespace[name] = this.evaluate(expression);
			return true;
		}
		this.deleteDefinitionOf = function (name) {
			if ('undefined' == typeof SICP.namespace[name]) {
				return false;
			}
			this.log("Deleting: " + name + ": " + SICP.namespace[name]);
			delete SICP.namespace[name];
			return true;
		}
		this.cleanNamespace = function () {
			for (name in SICP.namespace) {
				this.deleteDefinitionOf(name);
			}
			return true;
		}
	};
	constructor = JsSlim.extend(SICP.constructor, self);
	return constructor;
})();