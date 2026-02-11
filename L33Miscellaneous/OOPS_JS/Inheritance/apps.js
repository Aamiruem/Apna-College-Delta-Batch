class Mammal{//base class parent
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.hasTail = true;
        this.canFly = false;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal { //child
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("I am barking");
    }

    eat() {
        super.eat();
    }

    sleep() {
        console.log("I am sleeping");
    }

    walk() {
        console.log("I am walking");
    }
}




class Cat extends Mammal { //child
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("I am meow.....");
    }

    eat() {
        super.eat();
    }

    sleep() {
        console.log("I am sleeping....");
    }

    eat() {
        console.log("Dog am eating....");
    }

    walk() {
        console.log("I am walking....");
    }
}
