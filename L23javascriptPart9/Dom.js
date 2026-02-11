document.getElementById(mainImg);

document.getElementById("mainImg");

let imgObj = document.getElementById("mainImg");



// for images changes 

let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i < smallImages.length; i++) {
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed`);
}



console.dir(document.querySelector("h1"));

console.dir(document.querySelectorAll("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("div a"));




// //manipulating style
// heading.classList







console.dir(document.querySelector("h1"));

console.dir(document.querySelector("#description"));

console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelectorAll("div a"));
console.dir(document.querySelectorAll("h1"));














// para.innerText = "abc";
// 'abc'
// para.innerText = "Hi, I am Peter Parker!";
// 'Hi, I am Peter Parker!'
// para.innerText = "Hi, I am <b>Peter Parker</b>!";
// 'Hi, I am <b>Peter Parker</b>!'
// para.innerHTML = "Hi, I am <b>Peter Parker</b>!";
// 'Hi, I am <b>Peter Parker</b>!'
// heading
// VM1516:1 Uncaught ReferenceError: heading is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM1516:1
// let heading = document.querySelector('h1');
// undefined
// heading
// <h1>​Spider Man​</h1>​
// heading.innerHTML = `<u>${heading.innerText}</u>`;
// '<u>Spider Man</u>'













// let img = document.querySelector('img');
// undefined
// img
// <img src=​"+" id=​"mainImg">​

// img.getAttribute('id', 'spiderman');
// 'mainImg'
// let img = document.querySelector('img');
// undefined
// img.getAttribute('id', 'spiderman');
// '
// img.setAttribute('src',"assets/creation_3.jpeg" );
// undefined

// img
// <img src=​"assets/​creation_3.jpeg" id=​"mainImg">​
// img.setAttribute('src',"assets/creation_3.jpeg" );
// undefined



// color style
let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = "red";
}
console.log(links);

// or

// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "red";
// }
// console.log(links);












// let heading = document.querySelector('h1');
// undefined
// heading.classList.add("green");
// undefined
// heading.classList;
// DOMTokenList ['green', value: 'green']
// heading.classList.remove("green");
// undefined
// heading.classList.contains("green");
// false
// heading.classList.contains("green");
// false
// heading.classList.contains("underline");
// false
// heading.classList.contains("green");
// false
// heading.classList.toggle("green");
// true
// heading.classList.toggle("underline");
// true
// heading.classList;
// DOMTokenList(2) ['green', 'underline', value: 'green underline']






