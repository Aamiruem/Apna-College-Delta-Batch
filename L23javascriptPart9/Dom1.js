// let para = document.createElement("p");

// para.innerText = "Hey I'm red and I am new para";
// document.querySelectorAll("body").prepend(para);
// para.classList.add("red");

// let h3 = document.createElement("h3");

// h3.innerText = "Hey I'm blue ";

// document.querySelectorAll("body").prepend(h3);

// h3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I'm in a div";

// para2.innerText = "ME TOO!";

// div.append(para2);
// div.append(para2);

// document.querySelectorAll("body").prepend(div);

// div.classList.add("mystyle");




// // Corrected code:
// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "purple";
// }



// // Even better with forEach:
// document.querySelectorAll(".box a").forEach(link => {
//   link.style.color = "purple";
// });













// Create a paragraph and add it to the body
let para = document.createElement("p");
para.innerText = "Hey I'm red and I am new para";
para.classList.add("red");
document.body.prepend(para);

// Create an h3 and add it to the body
let h3 = document.createElement("h3");
h3.innerText = "Hey I'm blue";
h3.classList.add("blue");
document.body.prepend(h3);

// Create a div with an h1 and a paragraph
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);     // append the h1 first
div.append(para2);  // then append the paragraph

div.classList.add("mystyle");
document.body.prepend(div);

// Set link color to purple (using forEach for clarity)
document.querySelectorAll(".box a").forEach(link => {
  link.style.color = "purple";
});
