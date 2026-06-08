// let name = "Mohit";
// let person = {
//     name: "Mohit",
//     age: 22,
// }
// console.log(name);
// console.log(person.name);

// Mark and Sweep Algorithm

// function markAndSweep() {
//     console.log("Mark and Sweep Algorithm");
//     let user = {
//         name: "Mohit",
//         age: 22,
//         address: {
//             city: "Delhi",
//             state: "Delhi"
//         }
//     }
// }
// markAndSweep();

//Memory Leak

setInterval(() => {
    let user = {
        name: "Mohit",
        age: 22,
        address: {
            city: "Delhi",
            state: "Delhi"
        }
    }
    console.log(user);
}
, 1000);