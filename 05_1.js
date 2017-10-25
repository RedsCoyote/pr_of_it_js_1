'use strict';

/* Добавьте операции умножения и деления, с помощью механизма исключений реализуйте
проверку деления на ноль. */

function Calculator(x, y, operation) {
  this.x = x;
  this.y = y;
  this.operation = operation;
  this.result = null;
  this.calc = function () {
    if (this.result !== null) {
      return this.result;
    }

    switch (this.operation) {
    case '+':
      this.result = this.x + this.y;
    break;
    case '-':
      this.result = this.x - this.y;
    break;
    case '*':
      this.result = this.x * this.y;
    break;
    case '/':  // Деление на 0 в JS не вызывает исключения, поэтому создадим его сами
      if (!this.y) {  // Не булево сравнение, чтобы перехватывать +0, -0, NaN
        throw new Error('Invalid denominator ' + this.y);
      }

      this.result = this.x / this.y;
    break;
    default:
      this.result = undefined;
  }

    return this.result;
  };
}

let calculator = new Calculator(2, 3, '+');
console.log(calculator.calc()); // => 5

calculator = new Calculator(2, 0, '/');
try {
  console.log(calculator.calc());  // Не сработает, т.к. выкинет исключение
} catch (error) {
  console.log(error.message);  // => Invalid denominator 0
}
