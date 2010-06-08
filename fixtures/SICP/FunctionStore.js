SICP.FunctionStore = (function () {
	var self = function () {
		this.funcs = [];
		with (this) {
			this.defineAs = function(name, func) {
				this[name] = eval("(" + func + ")");
				this.funcs.push(name);
			}
		}
		this.resetDefinitions = function() {
			for (var i in this.funcs) {
				delete this[this.funcs[i]];
			}
			this.funcs = [];
			return true;
		}
	};
	return JsSlim.extend(SICP.constructor, self);
})();