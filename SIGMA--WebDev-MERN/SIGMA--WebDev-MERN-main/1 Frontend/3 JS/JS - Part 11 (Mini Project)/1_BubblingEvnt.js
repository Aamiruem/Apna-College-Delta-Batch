// Event Bubbling 
let div = document.querySelector("div");
div.addEventListener("click", function() {
    console.log("div clicked!");
});
let ul = document.querySelector("ul");
ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul clicked!");
});
let lis = document.querySelectorAll("li");
for (li of lis) {
    li.addEventListener("click", function(Event) {
        event.stopPropagation();
        console.log("li clicked!");
    });
}