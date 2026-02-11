// object literals
// used to store collections & complex entities
// key value pairs
// property =>(key, value) pair
// objects are collection of pairs


let person = { 
    name: "kamran",
    age: 22
};

console.log(person);
console.log(person.name);

person.name = "kamran khan";

console.log(person);

person["name"] = "kamran hussain";

console.log(person);

let person2 = {
    name: "kamran",
    age: 22
};

console.log(person2);




let delhi = {
    latitude: "28.7041 degree N",
    longitude: "77.1025 degree E",

    name: "Delhi"
};

console.log(delhi);



const student = {
    name: "kamran",
    age: 22,
    marks: 99.7,
    city: "Delhi"
};

console.log(student); 



const item = {
    price: 100.00,
    quantity: 5,
    name: "Apple",
    description: "A delicious fruit",
    isAvailable: true,
    colors: ["red", "pink"],
    tags: ["fruit", "healthy"],
    calculateDiscount: function() {
        return this.price * this.quantity * 0.10;

    },
    calculateFinalPrice: function() {
        return this.price * this.quantity - this.calculateDiscount();
    },
    getDetails: function() {
        return `${this.name} - ${this.price} per ${this.quantity} item(s)`;
    },
    updateQuantity: function(newQuantity) {
        this.quantity = newQuantity;
    }
};

console.log(item);
