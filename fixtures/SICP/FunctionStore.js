SICP.FunctionStore = (function () {
	var self = function () {
		var isPrintEnabled = false;
		with (SICP.namespace) {
			this.evaluate = function (expression) {
				return eval("(" + expression + ")");
			}
		}
		this.defineAs = function (name, expression) {
			this.log(name + " = " + expression + "\n");
			SICP.namespace[name] = this.evaluate(expression);
			return true;
		}
		this.deleteDefinitionOf = function (name) {
			if ('undefined' == typeof SICP.namespace[name]) {
				return false;
			}
			this.log("Deleting: " + name + ": " + SICP.namespace[name] + "\n");
			delete SICP.namespace[name];
			return true;
		}
		this.cleanNamespace = function () {
			for (name in SICP.namespace) {
				this.deleteDefinitionOf(name);
			}
			return true;
		}
		this.log = function (string) {
			if (isPrintEnabled) {
				print(string);
			}
		}
		this.setPrintEnabled = function (enable) {
			isPrintEnabled = JsSlim.Converter.toBool(enable);
		}
	};
	constructor = JsSlim.extend(SICP.constructor, self);
	return constructor;
})();