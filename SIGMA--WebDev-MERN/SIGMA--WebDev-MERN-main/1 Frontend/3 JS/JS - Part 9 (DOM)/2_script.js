// Practice Question
let p1 = document.createElement('p');
p1.innerText = "Hey I'm red!";
p1.classList.add("red");
document.querySelector("body").append(p1);

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.classList.add("blue");
document.querySelector("body").append(h3);

let div = document.createElement("div");
div.classList.add("boxStyling");
document.querySelector("body").append(div);

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";
div.append(h1);

let p2 = document.createElement("p");
p2.innerText = "ME TOO!";
div.append(p2);


console.log(document.body);