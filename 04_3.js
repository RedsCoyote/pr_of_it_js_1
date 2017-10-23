/* Перепишите пример, используя классы. */
class Animal {
  constructor(canSwim = undefined, gender = undefined) {
    this.gender = gender;
    this.legs = 4;
    this.hasTail = true;
    this.canSwim = canSwim;
  }
}

class Pig extends Animal {
  constructor(weight = undefined) {
    super(true);
    this.weight = weight;
    this.likesDirt = true;
  }

  grunt() {
    console.log('oink-oink');
  };
}

class Peppa extends Pig {
  constructor(mood = 'funny') {
    super();
    this.mood = mood;
    this.gender = 'female';
    this.funny_grunt = 'oink-oink (funny)';
    this.sadly_grunt = 'oink-oink (sadly)';
  };

  grunt() {
    switch (this.mood) {
    case 'funny':
      console.log(this.funny_grunt);
    break;
    case 'sadly':
      console.log(this.sadly_grunt);
    break;
    default:
      super.grunt();
    break;
  }
  }
}

let littlePig = new Peppa();
littlePig.grunt();  // => 'oink-oink (funny)'
littlePig.mood = 'sadly';
littlePig.grunt();  // => 'oink-oink (sadly)'
littlePig.mood = 'crazy';
littlePig.grunt();  // => 'oink-oink'
