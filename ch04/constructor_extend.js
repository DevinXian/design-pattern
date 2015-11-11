function Person(name) {
	this.name = name;
}

Person.prototype.getName = function () {
	return this.name;
};

function Author(name, books) {
	Person.call(this, name);
	this.books = books;
}

extend(Author, Person);

Author.prototype.getBooks = function () {
	return this.books;
};

function extend(subClass, superClass) {
	var F = function () {
	};
	F.prototype = superClass.prototype;//去除构造函数带来的副作用
	subClass.prototype = new F();
	subClass.prototype.constructor = subClass;

	subClass.superClass = superClass;
	if (superClass.prototype.constructor == Object.prototype.constructor) {
		//Object.prototype.constructor === Object; //true
		superClass.prototype.constructor = superClass;
	}
}