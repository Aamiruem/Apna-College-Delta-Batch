// Ans : 1
let input = document.createElement("input");
document.body.append(input);

let btn = document.createElement("button");
btn.innerText = "Click me";
document.body.append(btn);


// Ans : 2
input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");


// Ans : 3
let button = document.querySelector("#btn");
button.classList.add("btnStyling");


// Ans : 4
let h1 = document.createElement("h1");
document.body.prepend(h1);
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";


// Ans : 5
let p = document.createElement('p');
document.body.append(p);
p.innerHTML = "Apna College <b>Delta</b> Practice";