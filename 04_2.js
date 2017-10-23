'use strict';

/* Перепишите пример, используя конструкторы и prototype. */
function Animal(canSwim = undefined, gender = undefined) {
  this.gender = gender;
  this.legs = 4;
  this.hasTail = true;
  this.canSwim = canSwim;
}

function Pig(weight = undefined) {
  this.weight = weight;
  this.likesDirt = true;
}

Pig.prototype = new Animal(true);
Pig.prototype.grunt = function () {
    console.log('oink-oink');
  };

function Peppa(mood = 'funny') {
  this.mood = mood;
}

Peppa.prototype = new Pig();
Peppa.prototype.gender = 'female';
Peppa.prototype.funny_grunt = 'oink-oink (funny)';
Peppa.prototype.sadly_grunt = 'oink-oink (sadly)';
Peppa.prototype.grunt = function () {
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

let littlePig = new Peppa();
littlePig.grunt();  // => 'oink-oink (funny)'
littlePig.mood = 'sadly';
littlePig.grunt();  // => 'oink-oink (sadly)'
littlePig.mood = 'crazy';
littlePig.grunt();  // => 'oink-oink'
console.log(littlePig.canSwim);  // => true: проверял как работает Pig.prototype = new Animal(true);
