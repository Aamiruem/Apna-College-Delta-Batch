// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }
// // function callMe() {
// //     console.log("I am a callback function");
// // }
// greet("Mohit", function() {
//     console.log("I am a callback function");
// });

//setTimeOut

function showMessage() {
    console.log("This is a message after 2 seconds");
}
setTimeout(showMessage, 2000); // Calls showMessage after 2 seconds
