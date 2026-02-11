// DOM Events
// 1st method is inline in the html tag (don't recommend)
// 2nd method is js file
let btns = document.querySelectorAll("button");

for (btn of btns) {
    // btn.onclick = btnClicked; // click
    btn.onmouseenter = function() {
        console.log("You entered a button"); // hover
    }
}
function btnClicked() {
    alert("Button clicked");
    console.log("Button was clicked");
}

// Event Listeners
for (btn of btns) {
    // btn.addEventListener("click", btnClicked); // click
    // btn.addEventListener("click", heloEtLr); // click
    
    btn.addEventListener("dblclick", function() {
        console.log("You double clicked"); // double click
    });
}
function heloEtLr() {
    alert("Helo Event Listener");
}

// Event Listener on Elements
let p = document.querySelector('p');
p.addEventListener("click", function() {
    console.log("Para was clicked");
});
let div = document.querySelector("div");
div.addEventListener("mouseenter", function() {
    console.log("Mouse entered inside box");
});

// this in Event Listeners
function doSomeThing() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}
let h1 = document.querySelector("h1");
h1.addEventListener("click", doSomeThing);

let h3 = document.querySelector("h3");
h3.addEventListener("click", doSomeThing);

let para = document.querySelector(".para");
para.addEventListener("click", doSomeThing);

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", doSomeThing);


// Default event argument
let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function(event) {
    console.log(event);
    console.log("Button clicked");
});

// Keyboard Event
let input = document.querySelector("input");
input.addEventListener("keydown", function(event) {
    console.log("key =", event.key);
    console.log("code =", event.code);
    if (event.code == "ArrowDown") { console.log("Down key pressed") }
    console.log(event);
});

// Form Events
let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    // alert("Form submitted");
    // event.preventDefault();
});

// Extracting Form Data
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // let user = document.querySelector("#user");
    let user = form.elements[0]; // accessing index 0 element
    // let pass = document.querySelector("#pass");
    let pass = this.elements[1]; // accessing index 1 element

    alert("You successfully registered.");
    console.log(`Hi, ${user.value}, Your password is set to ${pass.value}`);

    console.dir(user); // to see all properties
    console.dir(form); // to see all properties
    console.dir(form.elements); // to see all the elements
});

// More Events
// change event
let user = document.querySelector("#user");
user.addEventListener("change", function() {
    console.log("Change event :-");
    console.log("Final value :", user.value);
});
// input event
user.addEventListener("input", function() {
    console.log("Input event :-");
    console.log("Current value :", user.value);
});