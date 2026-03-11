let btns = document.querySelectorAll("button");

for (let btn of btns) {
    btn.onclick = sayHello;
    btn.onclick = sayName;
}

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Apna College");
}





let btn1 = document.querySelectorAll("button");

for (let btn of btn1) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}

function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Apna College");
}
