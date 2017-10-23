'use strict';

/* Создайте в своём коде три объекта со следующими именами:
 animal (со свойствами "пол", "число ног", "наличие хвоста", "умеет плавать")
 pig (со свойствами "вес", "любит ли валяться в грязи")
 peppa (свойство "настроение") */
let animal = {
    gender: undefined,
    legs: 4,
    hasTail: true,
    canSwim: undefined,
  };

let pig = {
    weight: undefined,
    likesDirt: true,
  };

let peppa = {
    mood: 'funny',
  };

/* Задайте объектам их прототипы, чтобы получилась правильная цепочка наследования */
pig.__proto__ = animal;
peppa.__proto__ = pig;

/* Добавьте к объекту pig метод, который "хрюкает", проверьте - появился ли он у peppa? */
pig.grunt = function () {
    console.log('oink-oink');
  };

peppa.grunt();  // => 'oink-oink' - хрюкает, куда она денется

/* Измените хрюкание peppa, сделав его зависимым от её настроения. */
peppa.funny_grunt = 'oink-oink (funny)';
peppa.sadly_grunt = 'oink-oink (sadly)';
peppa.grunt = function () {
    switch (this.mood) {
    case 'funny':
      console.log(this.funny_grunt);
    break;
    case 'sadly':
      console.log(this.sadly_grunt);
    break;
    default:
      this.__proto__.grunt();
    break;
  }
  };

peppa.grunt();  // => 'oink-oink (funny)'
peppa.mood = 'sadly';
peppa.grunt();  // => 'oink-oink (sadly)'
peppa.mood = 'crazy';
peppa.grunt();  // => 'oink-oink'
