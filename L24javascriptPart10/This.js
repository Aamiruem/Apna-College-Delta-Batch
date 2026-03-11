let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    console.log(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "red";
    let h1 = document.querySelector("h1");
    h1.style.backgroundColor = "red";
});




// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// p.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });



// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "green";
// });
