// function Person(name){
//     this.name = name;
//     this.sayHello = function() {
//         console.log("Hello, my name is " + this.name);
//     }
// }

// const person1 = new Person("Alice");
// person1.sayHello();

// function Person(name) {
//     return{
//         name,
//         sayHello(){
//             console.log("Hello, my name is " + name);
//         }
//     }
// }
// const person1 = Person("Mohit");
// person1.sayHello();

const person = (
    function(){
        let secrate = "I am Private";
        return{
            value(){
                console.log(secrate)
            }
        }
    }
)()
person.value();