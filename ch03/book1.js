var Book = function (isbn, title, author) {
	if (!this.checkIsbn(isbn)) throw new Error('Book: invalid ISBN');
	this.setIsbn(isbn);
	this.setTitle(title);
	this.setAuthor(author);
};

Book.prototype = {
	checkIsbn: function (isbn) {
		if (isbn == undefined || typeof isbn != 'string') {
			return false;
		}
		isbn = isbn.replace(/-/, '');
		if (isbn.length != 10 && isbn.length != 13) {
			return false;
		}
		var sum = 0, checksum;
		if (isbn.length === 10) {
			if (!isbn.match(/^\d{9}/)) {
				return false;
			}
			for (var i = 0; i < 9; ++i) {
				sum += isbn.charAt(i) * (10 - i);
			}
			checksum = sum % 11;
			if (checksum === 10)checksum = 'X';
			if (isbn.charAt(9) != checksum) {
				return false;
			}
		} else {//13 digit ISBN
			if (!isbn.match(/^\d{12}/)) {
				return false;
			}
			for (var j = 0; j < 12; j++) {
				sum += isbn.charAt(j) * ((j % 2 === 0) ? 1 : 3);
			}
			checksum = sum % 10;
			if (isbn.charAt(12) != checksum) {
				return false;
			}
		}
		return true;
	},
	getIsbn: function () {
		return this.isbn;
	},
	setIsbn: function (isbn) {
		if (!this.checkIsbn(isbn)) throw new Error('Book: invalid ISBN.');
		this.isbn = isbn;
	},
	getTitle: function () {
		return this.title;
	},
	setTitle: function (title) {
		this.title = title || 'No title';
	},
	getAuthor: function () {
		return this.author;
	},
	setAuthor: function (author) {
		this.author = author;
	},
	display: function () {
		console.log('book displays');
	}
};

var Publication = new In