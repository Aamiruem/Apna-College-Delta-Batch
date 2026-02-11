// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let username = document.querySelector("#username");
//     let password = document.querySelector("#password");
//     alert("username: " + username.value + " password: " + password.value);

// });



// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     // alert("username: " + username.value + " password: " + password.value);
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);

// });





// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);


//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);

// });






// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     // console.dir(form);
// });

//     let user = document.querySelector("#user");
//     user.addEventListener("change", function (){
//         console.log("change event");
//         console.log("final value = ", this.value);

//     });



//     user.addEventListener("input", function (){
//         console.log("input event");
//         console.log("final value = ", this.value);

//     });





let inp = document.querySelector("#text");

let p = document.querySelector("p");

inp.addEventListener("input", function () {
    p.innerText = inp.value;
    console.log(inp.value);
});
    
