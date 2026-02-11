let btn = document.querySelector("button"); 
console.dir(btn)


btn.onclick = function (event) {
    console.log(event);
    console.log("button was clicked");
    console.log(event.clientX);
    alert("button was clicked");
};      

btn.addEventListener("click", function (event) {
    console.log(event);
    console.log("button was clicked");
});










let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.clientX, e.clientY);
    console.log(e.offsetX, e.offsetY);
    console.log(e.screenX, e.screenY);
    console.log(e.pageX, e.pageY);
  });
});

btns.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    console.log(e);
    console.log(e.clientX, e.clientY);
    console.log(e.offsetX, e.offsetY);
    console.log(e.screenX, e.screenY);
    console.log(e.pageX, e.pageY);
  });
});
