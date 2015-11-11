var Person = {
	name: 'default name',
	getName: function () {
		return this.name;
	}
};

var reader = clone(Person);
console.log(reader.getName());
reader.name = 'John Smith';
console.log(reader.getName());

function clone(protoObj) {
	var F = function () {
	};
	F.prototype = protoObj;
	return new F();
}

//p.44 stop