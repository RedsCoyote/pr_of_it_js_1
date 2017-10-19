'use strict';

function Calculator (x, y, operation) {
	this.x = x;
	this.y = y;
	this.operation = operation;
	this.result = null;
	this.calc = function () {
		if (null !== this.result) {
			return this.result;
		}

		switch (this.operation) {
			case '+':
				this.result = this.x + this.y;
				break;
			case '-':
				this.result = this.x - this.y;
				break;
			default:
				this.result = undefined;
		}

		return this.result;
	}
}

let calculator = new Calculator(2, 3, '+');
console.log( calculator.calc() ); // => 5
