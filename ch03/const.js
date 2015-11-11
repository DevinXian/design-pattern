/**
 * 特权静态方法
 */
var Class = (function () {
	var UPPER_BOUND = 10;

	var ctor = function (constructorArgument) {
		//....
	};
	ctor.getUPPER_BOUND = function () {
		return UPPER_BOUND;
	};

	return ctor;
})();

var MyConst = (function () {
	var constants = {
		UPPER_BOUND: 100,
		LOWER_BOUND: -100
	};

	var ctor = function (constructorArgument) {
		//...
	};
	/**
	 * 静态特权方法
	 * @param name
	 * @returns {*}
	 */
	ctor.getConstant = function (name) {
		return constants[name];
	};

	return ctor;
})();

console.log(MyConst.getConstant('UPPER_BOUND'));