class Animal{
    speak(){
        console.log("The animal makes a sound");
    }
}
class Dog extends Animal{
    speak(){
        console.log("The dog barks");
    }
}
class Cat extends Animal{
    speak(){
        console.log("The cat meows");
    }
}

const animal = [new Animal(), new Dog(), new Cat()];
animal.forEach(animal => {
    animal.speak();
});