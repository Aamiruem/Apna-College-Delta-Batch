// DOM (Document Object Model)
// console.log(document);
 console.dir(document); // use dir method for print document's properties
console.dir(document.all); // document.all returns HTMLAllCollections

// let's see an example, if i want to change the h1 heading of document (HTML Code)
let changedH1 = document.all[9].innerText = "SPIDER MAN"; // changed
let changed = document.all[9].innerText = "Spider Man"; // again changed to origianl value


// 1. SELECTING ELEMENTS

// using getElementById
let imgObj = document.getElementById("mainImg");
console.dir(imgObj); // see all properties of imgObj
console.dir(imgObj.id); // see the id of imgObj, which is "mainImg"
console.dir(imgObj.tagName); // see the tag name, which is <img>
console.dir(imgObj.src); // see the source/path

let desc = document.getElementById("description");
console.dir(desc.tagName);
console.dir(desc.innerText); // see the text, which is written inside it

console.dir(document.getElementById("XYZ")); // if not found, it'll show null


// using getElementByClassName
let smallImages = document.getElementsByClassName("oldImg");
console.dir(smallImages); // returns HTML Collection
console.dir(document.getElementsByClassName("XYZ")); // if not found, it'll show Empty Collection of 0 length

for (let i=0; i<smallImages.length; i++) {
    console.log(`Image source at index ${i} is :`, smallImages[i].src);
}


// using getElementByTagName
let pTag = document.getElementsByTagName('p'); // show HTML Collection, if not found then Empty collection
console.dir(pTag);
console.dir(pTag[0].innerText);


// Query Selectors
// it returns only first element
console.dir(document.querySelector("h1").innerText);
console.dir(document.querySelector("#mainImg").src);
console.dir(document.querySelector(".oldImg").src); // returns only first element, not HTML Collection
console.dir(document.querySelector("div a").innerText); // single first element

// it returns all elements/nodeList
console.dir(document.querySelectorAll("div a")); // NodeList of 4 elmnts
console.dir(document.querySelectorAll("p")); // NodeList of 2 elmnts


// 2. MANIPULATING THE ELEMENTS

// using innerText & innerHTML
let para = document.querySelector('p');
console.dir(para.innerText); // shows all visible text contained in a node
console.dir(para.textContent); // shows all the full text (with hidden text)
console.dir(para.innerHTML); // shows the full markup (with tag name)
// Manipulating
// console.dir(para.innerText = "Hey, I am Peter Parker!"); // changed
// console.dir(para.innerHTML = "Hey, I am <b>Peter Parker!</b>"); // changed with bold tag
let heading1 = document.querySelector("h1");
console.dir(heading1.innerHTML = "<u>Spider Man</u>");
let heading4 = document.querySelector("h4");
console.dir(heading4.innerHTML = `<u>${heading4.innerText}</u>`); // if i don't know that wht's the text inside it


// using getAttribute & setAttribute
let bigImage = document.querySelector("img");
console.dir(bigImage.getAttribute("id")); // get/see attribute name (before)
bigImage.setAttribute("id", "spidermanImg"); // setting name of attribute
console.dir(bigImage.getAttribute("id")); // getting name of attribute (after changes)
bigImage.setAttribute("src", "assets/creation_3.jpeg"); // source changed
bigImage.setAttribute("class", "bigSpidermanImg"); // class name set
console.dir(bigImage.getAttribute("class")); // see name of class attribute


// using style - (shows only inline styles)
heading1.style.color = "purple";
// heading1.style.backgroundColor = "lightgrey";

let links = document.querySelectorAll(".box a");
for (link of links) {
    link.color = "blue";
}

// using classList
console.dir(heading1.classList); // returns DOMTokenList (shows all classes)
heading1.classList.add("addedCls", "newCls"); // added 2 new class tpgether
console.dir(heading1.classList); // see all the classes
heading1.classList.remove("addedCls"); // removed 1 class
console.dir(heading1.classList); // see all the classes
console.dir(heading1.classList.contains("addedCls")); // check if a class exists or not
console.dir(heading1.classList.toggle("newCls", "addedCls")); // toggle classes between add & remove
let box = document.querySelector(".box");
box.classList.add("yellowBg");
console.dir(box.classList);


// Navigation
// using parentElement, children & previousElementSibling/nextElementSibling
console.dir(heading4.parentElement); // shows the parent element
console.dir(box.children); // returns HTMLCollection (shows all childrens)
let ul = document.querySelector("ul");
console.dir(ul.children);
console.dir(ul.children[1].previousElementSibling);
console.dir(ul.children[1].nextElementSibling);
bigImage.previousElementSibling.style.color = "red";


// Adding Elements
// using createElement, appendChild, append, prepend & insertAdjacent
let newP = document.createElement('p'); // created new element
newP.innerText = "Hey, I am a new paragraph. "; // added text in new element
console.dir(newP.innerText); // see the added text inside newP
let body = document.querySelector("body"); // selected for adding element inside it
body.appendChild(newP); // newP added inside body tag
let btn = document.createElement("button");
btn.innerText = "Click me";
body.appendChild(btn);
newP.append(btn); // btn added inside newP 
newP.append(" Do not click this button."); // we can add text also inside it usi8ng append
// box.prepend(newP); // it adds elements in the beginning
let newBtn = document.createElement("button");
newBtn.append("NEW BUTTON!");
box.insertAdjacentElement("beforeend", newBtn); // it adds, where you want


// Removing Elements
// using removeChild & remove
box.removeChild(newBtn); // removed newBtn from the box
newP.remove(); // removed newP from the document/body