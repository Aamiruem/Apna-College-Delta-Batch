let btns = document.querySelectorAll("button");
for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.onmouseenter = function() {
    //     console.log("you was entered a button");
        
    // }


    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName); 
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked me");
    }); 
}
console.dir(btn);

btn.click = function(){
    alert("button was clicked");
}


function sayHello () {
    alert("Hello");
}
btn.onclick = sayHello;


function sayName () {
    alert("my name is kamran");
}
