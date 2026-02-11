// Ans : 1
let dice = Math.floor(Math.random() * 6) + 1;
console.log("PrQs1 :", dice);

// Ans : 2
const car = {
    name: "Maruti",
    model: "Maruti Suzuki Dzire",
    color: "White"
};
console.log("PrQs2 :", car,
    "Car Name :-", car.name);

    // Ans : 3
    const person = {
        name: "Brendan Eich",
        age: 55,
        city: "New Jersey"
    };
    console.log("PrQs3 :", person);

    person.city = "New York"; // Change
    person.country = "United States"; // Add

    console.log("PrQs3 after change and add :", person);