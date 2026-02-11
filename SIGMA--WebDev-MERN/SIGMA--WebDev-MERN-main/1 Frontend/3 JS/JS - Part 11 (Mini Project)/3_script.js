let gameSequence = [];
let userSequence = [];

let isGameStarted = false;
let level = 0;

document.addEventListener("keypress", function() {
    if (isGameStarted == false) {
        console.log("|________GAME STARTED________|");
        isGameStarted = true;

        levelUp();
    }
});

let h2 = document.querySelector("h2");
function gameFlash(box) {
    box.classList.add("gameFlash");
    setTimeout(function() {
        box.classList.remove("gameFlash");
    }, 250);
}
let boxesColor = ["red", "yellow", "green", "purple"];

function levelUp() {
    userSequence = [];

    level++;
    h2.innerText = `Level ${level}`;
    console.log(`Your level is : ${level}`);

    let randomColor = boxesColor[ Math.floor(Math.random() * 3) ];
    let randomBox = document.querySelector(`.${randomColor}`);
    gameFlash(randomBox);
    console.log(`Your flashed box color is '${randomColor}'`);

    gameSequence.push(randomColor);
    console.log("Game Sequence :", gameSequence);
}

function userFlash(box) {
    box.classList.add("userFlash");
    setTimeout(function() {
        box.classList.remove("userFlash");
    }, 250);
}
let allBoxes = document.querySelectorAll(".box");
for (box of allBoxes) {
    box.addEventListener("click", function() {
        let box = this;
        userFlash(box);

        let userColor = box.getAttribute("id");
        console.log(`You pressed '${userColor}' color's box`);

        userSequence.push(userColor);
        console.log("User Sequence :", userSequence);

        checkAns(userSequence.length-1);
    });
}

function checkAns(idx) {
    if (userSequence[idx] == gameSequence[idx]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp, 900);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        console.log("|_________GAME OVER________|");
        resetForRestart();
    }
}

function resetForRestart() {
    isGameStarted = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}