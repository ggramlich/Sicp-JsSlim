var SICP = (function() {
	// SICP is an instantiated object, which is used as
	// a "package" for the import table and a base constructor
	// which is extended by the SICP.FunctionStore.
	// All methods on FunctionStore
	// might already be put into SICP. It started out with
	// some different separation of concerns and I kept it
	// like this to show how to create a constructor like
	// SICP.FuntionStore.
	// The SICP.namespace which is defined here at the end
	// is used as a static fixture object which is not instantiated.
	var constructor = function () {};
	var isPrintEnabled = false;
	var self = {
		isPrintEnabled: false,
		log: function (string) {
			if (isPrintEnabled) {
				print(string + "\n");
			}
		},
		setPrintEnabled: function (enable) {
			isPrintEnabled = JsSlim.Converter.toBool(enable);
		}
	};
	constructor.prototype = self;
	var instance = new constructor();
	instance.constructor = constructor;
	instance.namespace = {};
	return instance;
})();
