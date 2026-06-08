class person{
  constructor(name="Unknown", age="N/A"){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person1 = new person("Mohit", 20);
const person2 = new person("Rohit", 22);
person1.greet();
person2.greet();