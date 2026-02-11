// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"]
// let started = false;
// let level = 0;

// let h2 = document.querySelector('h2');


// document.addEventListener("keypress", function (){
//     if(started == false){
//         console.log("game is started");
//         started = true;
        
//         levelUp();
//     }
// });

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },250);
// }

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     },250);
// }

// function levelUp(){
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;


//     //random btn choose
//     let randIdx = Math.floor(Math.random() * 3);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     // console.log(randIdx)
//     // console.log(randColor);
//     // console.log(randBtn);


//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }


// function checkAns(idx){
//     // console.log("curr level: ", level);
//     let idx = level -1;

//     if(userSeq[idx] == gameSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//             setTimeout(levelUp, 1000);
//         }
//         console.log("same value");
//     } else{
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
//         reset();
//     }
// }

// function btnPress() {
//     console.log(this);
//     let btn = this;
//     userFlash(btn);
//     userColor = btn.getAttribute("id");
//     console.log(userColor);

//     userSeq.push(userColor);
//     checkAns(userSeq.length-1);

// }

// let allBtns = document.querySelectorAll('.btn');

// for(btn of allBtns){
//     btn.addEventListener("click", btnPress);
// }

// function reset(){
//     level = 0;
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
//     h2.innerHTML = "Press any key to start";
// }











// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];
// let started = false;
// let level = 0;

// let h2 = document.querySelector('h2');

// document.addEventListener("keypress", function () {
//     if (!started) {
//         console.log("Game is started");
//         started = true;
//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     }, 250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     // Random button choose
//     let randIdx = Math.floor(Math.random() * btns.length); // Corrected to use btns.length
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);

//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//         console.log("Correct sequence");
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
//         reset();
//     }
// }

// function btnPress() {
//     let btn = this;
//     userFlash(btn);
//     let userColor = btn.getAttribute("id");

//     userSeq.push(userColor);
//     checkAns(userSeq.length - 1);
// }

// let allBtns = document.querySelectorAll('.btn');
// allBtns.forEach(function(btn) {
//     btn.addEventListener("click", btnPress);
// });

// function reset() {
//     level = 0;
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     h2.innerHTML = "Press any key to start";
// }


// document.querySelector("h2").innerText = `Level ${level}`;
// document.querySelector("h2").innerText = "Game Over! Press any key to restart.";
// document.body.classList.add("game-over");
// setTimeout(() => {
//     document.body.classList.remove("game-over");
// }, 200);


// function playSound(color) {
//     let audio = new Audio(`${color}.mp3`);
//     audio.play();
// }










// let gameSeq = [];
// let userSeq = [];

// const btns = ["yellow", "red", "purple", "green"];
// let started = false;
// let level = 0;

// const h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if (!started) {
//         console.log("Game is started");
//         started = true;
//         levelUp();
//     }
// });

// function playSound(color) {
//     let audio = new Audio(`${color}.mp3`);
//     audio.play();
// }

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     playSound(btn.id);
//     setTimeout(() => btn.classList.remove("flash"), 250);
// }

// function userFlash(btn) {
//     btn.classList.add("userflash");
//     playSound(btn.id);
//     setTimeout(() => btn.classList.remove("userflash"), 250);
// }

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     const randIdx = Math.floor(Math.random() * btns.length);
//     const randColor = btns[randIdx];
//     const randBtn = document.querySelector(`.${randColor}`);

//     gameSeq.push(randColor);
//     console.log("Game sequence:", gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart.`;
//         playSound("wrong");
//         document.body.classList.add("game-over");
//         setTimeout(() => {
//             document.body.classList.remove("game-over");
//         }, 200);
//         reset();
//     }
// }

// function btnPress() {
//     const btn = this;
//     const userColor = btn.getAttribute("id");

//     userFlash(btn);
//     userSeq.push(userColor);
//     checkAns(userSeq.length - 1);
// }

// const allBtns = document.querySelectorAll(".btn");
// allBtns.forEach(btn => {
//     btn.addEventListener("click", btnPress);
// });

// function reset() {
//     level = 0;
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     h2.innerText = "Press any key to start";
// }



// document.querySelector("h2").innerText = `Level ${level}`;

// document.querySelector("h2").innerText = "Game Over! Press any key to restart.";
// document.body.classList.add("game-over");
// setTimeout(() => {
//     document.body.classList.remove("game-over");
// }, 200);



// function playSound(color) {
//     let audio = new Audio(`${color}.mp3`);
//     audio.play();
// }





// function gameFlash(btn) {
//     playSound(btn.id);
//     btn.classList.add("flash");
//     setTimeout(() => {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     playSound(btn.id);
//     btn.classList.add("userflash");
//     setTimeout(() => {
//         btn.classList.remove("userflash");
//     }, 250);
// }


// function playSound(color) {
//     let audio = new Audio(`${color}.mp3`);
//     audio.play();
// }



// function checkAns(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         playSound("wrong"); // Game over sound
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart.`;
//         document.body.classList.add("game-over");
//         setTimeout(() => {
//             document.body.classList.remove("game-over");
//         }, 200);
//         reset();
//     }
// }



















// Game variables
let gameSeq = [];
let userSeq = [];
let level = 0;
let highScore = 0;
let isPlaying = false;
let isUserTurn = false;

// DOM elements
const levelTitle = document.getElementById("level-title");
const highScoreDisplay = document.getElementById("high-score");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const buttons = document.querySelectorAll(".btn");

// Sound elements
const sounds = {
    red: document.getElementById("red-sound"),
    yellow: document.getElementById("yellow-sound"),
    green: document.getElementById("green-sound"),
    purple: document.getElementById("purple-sound"),
    wrong: document.getElementById("wrong-sound")
};

// Event listeners
document.addEventListener("keypress", handleStart);
startBtn.addEventListener("click", handleStart);
resetBtn.addEventListener("click", resetGame);

buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

// Game functions
function handleStart() {
    if (!isPlaying) {
        isPlaying = true;
        isUserTurn = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
        levelUp();
    }
}

function levelUp() {
    level++;
    updateTitle(`Level ${level}`);
    userSeq = [];
    isUserTurn = false;
    
    // Add random color to sequence
    const colors = ["red", "yellow", "green", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gameSeq.push(randomColor);
    
    // Play sequence with delay
    playSequence(0);
}

function playSequence(index) {
    if (index < gameSeq.length) {
        setTimeout(() => {
            const color = gameSeq[index];
            animateButton(color);
            playSound(color);
            playSequence(index + 1);
        }, 600);
    } else {
        isUserTurn = true;
        updateTitle("Your turn!");
    }
}

function handleButtonClick() {
    if (!isPlaying || !isUserTurn) return;
    
    const color = this.id;
    userSeq.push(color);
    
    animateButton(color, true);
    playSound(color);
    
    checkAnswer(userSeq.length - 1);
}

function checkAnswer(index) {
    if (userSeq[index] !== gameSeq[index]) {
        gameOver();
        return;
    }
    
    if (userSeq.length === gameSeq.length) {
        isUserTurn = false;
        updateTitle("Correct! Next level...");
        setTimeout(levelUp, 1000);
    }
}

function gameOver() {
    playSound("wrong");
    document.body.classList.add("game-over");
    setTimeout(() => {
        document.body.classList.remove("game-over");
    }, 500);
    
    updateTitle(`Game Over! Score: ${level}<br>Press Start to play again`);
    
    // Update high score
    if (level > highScore) {
        highScore = level;
        highScoreDisplay.textContent = highScore;
    }
    
    isPlaying = false;
}

function resetGame() {
    gameOver();
    highScore = 0;
    highScoreDisplay.textContent = highScore;
    updateTitle("Press Start to play");
}

// Helper functions
function animateButton(color, isUser = false) {
    const btn = document.getElementById(color);
    btn.classList.add(isUser ? "userflash" : "flash");
    
    setTimeout(() => {
        btn.classList.remove(isUser ? "userflash" : "flash");
    }, 300);
}

function playSound(color) {
    sounds[color].currentTime = 0;
    sounds[color].play();
}

function updateTitle(text) {
    levelTitle.innerHTML = text;
}

// Initialize
updateTitle("Press Start to play");
