// Practice Question - Activity
let btn = document.querySelector("button");
btn.addEventListener("click", applyOn);

function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return rgbColor;
}

function applyOn() {
    let h3 = document.querySelector("h3");
    h3.innerText = getRandomColor();

    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomColor();

    console.log("Color Updated");
}

// Practice Question - Activity
let type = document.querySelector("#text");

type.addEventListener("input", function() {
    let p = document.querySelector('p');
p.innerText = type.value;
});