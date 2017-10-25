'use strict';

/* интернет-магазин. У вас есть объекты-товары, есть конструктор для таких товаров
(или класс - это на ваш выбор). Продумайте - какие аргументы обязательны для создания
товара? Например - наименование, артикул, цена? Еще что-то?
Напишите соответствующий код
Давайте отслеживать ситуацию создания товара с нулевой или отрицательной ценой и
считать ее ошибкой. Бросайте соответствующее исключение в конструкторе. */

class Product {
  constructor(name, vendorCode, price, quantity) {
    if (price <= 0) {
      throw new Error('Negative price value ' + price);
    }

    this.price = price;
    this.vendorCode = vendorCode;
    this.name = name;
    this.qantity = quantity;
  }
}

let hammer = new Product('Молоток', 'ART12345', 150.30, 15);
console.log(hammer);  // => Product {price: 150.3, vendorCode: 'ART12345', name: 'Молоток', qantity: 15 }

try {
  var spike = new Product('Гвоздь', 'ART54321', -1.5, 150);

// let spike = new Product('Гвоздь', 'ART54321', -1.5, 150);
  console.log(spike);  // не выполняется

} catch (error) {
  console.log(error.message);  // => Negative price value -1.5
  try {
    console.log(spike);  // => undefined: объект не создан, переменной ничего не присвоили
    // если бы определял через let, то было бы исключение, как показано ниже
  } catch (error) {
    console.log(error.message);  // => spike is not defined
  }
}
