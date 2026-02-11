// Ans : 1 (i)
let divBox = document.querySelector(".myDiv");

divBox.addEventListener("mouseover", function() {
    divBox.style.backgroundColor = "red";
    divBox.innerText = "Mouse is over me!";

    console.log("Mouse is over me!");
});
divBox.addEventListener("mouseout", function() { // Ans example
    divBox.style.backgroundColor = "blue";
    divBox.innerText = "Mouse is out of me!";

    console.log("Mouse is out of me!");
});

// Ans : 1 (ii)
let type = document.querySelector("#text");
type.addEventListener("keypress", function(event) {
    console.log("You pressed :", String.fromCharCode(event.keyCode));
});

// Ans : 1 (iii)
window.addEventListener("scroll", function() {
    let countScroll = window.pageYOffset || document.documentElement.scrollTop;
    let see = document.querySelector(".scrollStatus").innerText =  countScroll + "px scrolled!";
    console.log("Scroll position :", see);
});

// Ans : 1 (iv)
let img = document.querySelector("img");
img.addEventListener("load", function() {
    let loaded = document.querySelector(".imgStatus").innerText = "Image has loaded!";
    console.log(loaded);
});

// Ans : 2
let btn = document.createElement("button");
document.body.append(btn);
btn.innerText = "Click me";

btn.addEventListener("click", function() {
    this.style.color = "white";
    this.style.backgroundColor = "green";
});

// Ans : 3
let input = document.querySelector("#name");
input.addEventListener("input", function() {
    let h2 = document.querySelector("h2");

    let filteredInput = this.value.replace(/[^a-zA-Z ]/g, ''); // Allowed only a-z A-Z and Space 
    h2.innerText = filteredInput;
})