/**
 * Book with class method
 */
var Book = (function () {
	/**
	 * private static attributes
	 * @type {number}
	 */
	var numOfBooks = 0;

	return function (newIsbn, newTitle, newAuthor) {
		var isbn, title, author;

		function checkIsbn(isbn) {
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
		}

		this.getIsbn = function () {
			return isbn;
		};
		this.setIsbn = function (nisbn) {
			if (checkIsbn(nisbn)) throw new Error('Book: invalid ISBN.');
			isbn = nisbn;
		};
		this.getTitle = function () {
			return title;
		};
		this.setTitle = function (ntitle) {
			title = ntitle || 'No title';
		};
		this.getAuthor = function () {
			return author;
		};
		this.setAuthor = function (nauthor) {
			author = nauthor || 'No author';
		};

		this.setIsbn(newIsbn);
		this.setTitle(newTitle);
		this.setAuthor(newAuthor);

		numOfBooks++;
		if (numOfBooks > 50) {
			throw new Error('Only 50 Book instances can be created');
		}
	}
})();

//public static method
Book.convertToTitleCase = function (inputString) {
	console.log('book static class method');
};

//public, non-privileged methods
Book.prototype = {
	display: function () {
		console.log('book displays');
	}
};