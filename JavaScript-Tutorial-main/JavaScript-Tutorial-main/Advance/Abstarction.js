class coffeeMachine {
    start(){
        this.#addWater();
        this.#addCoffee();
        this.#brewCoffee();
        console.log("Coffee is ready!");
    }
    #addWater(){
        console.log("Adding water...");
    }
    #addCoffee(){
        console.log("Adding coffee...");
    }
    #brewCoffee(){
        console.log("Brewing coffee...");
    }
}

const myCoffeeMachine = new coffeeMachine();
myCoffeeMachine.start();