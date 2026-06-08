class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Doggy");
d.makeSound();
d.bark();
